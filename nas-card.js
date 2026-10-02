// NAS Card v1.0.0 — CC BY-NC 4.0 — BeGiBue
const NAS_CARD_VERSION = "1.0.0";
const DEFAULT_NAS_IMAGE = "https://raw.githubusercontent.com/BeGiBue/nas_card/main/images/ds720plus.png";

class NasCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._hass = null;
    this._config = null;
  }

  static getStubConfig() {
    return {
      title: "DS720+",
      subtitle: "Synology NAS",
      show_image: true,
      image_url: "",
      temperature_entity: "sensor.diskstation_temperatur",
      cpu_entity: "sensor.diskstation_cpu_auslastung_gesamt",
      memory_entity: "sensor.diskstation_speichernutzung_real",
      security_entity: "binary_sensor.diskstation_sicherheitsstatus",
      inbound_entity: "sensor.diskstation_download_durchsatz",
      outbound_entity: "sensor.diskstation_upload_durchsatz",
      volume_title: "Volume 1",
      volume_percent_entity: "sensor.diskstation_volume_1_verwendetes_volumen",
      volume_used_entity: "sensor.diskstation_volume_1_belegter_speicherplatz",
      volume_status_entity: "sensor.diskstation_volume_1_status",
      drive1_title: "Drive 1",
      drive1_temperature_entity: "sensor.diskstation_drive_1_temperatur",
      drive1_lifetime_entity: "binary_sensor.diskstation_drive_1_unterhalb_der_mindestrestlebensdauer",
      drive1_sectors_entity: "binary_sensor.diskstation_drive_1_max_fehlerhafte_sektoren_uberschritten",
      drive1_status_entity: "sensor.diskstation_drive_1_status",
      drive2_title: "Drive 2",
      drive2_temperature_entity: "sensor.diskstation_drive_2_temperatur",
      drive2_lifetime_entity: "binary_sensor.diskstation_drive_2_unterhalb_der_mindestrestlebensdauer",
      drive2_sectors_entity: "binary_sensor.diskstation_drive_2_max_fehlerhafte_sektoren_uberschritten",
      drive2_status_entity: "sensor.diskstation_drive_2_status",
      update_title: "DSM Update",
      update_entity: "update.diskstation_dsm_update",
      reboot_entity: "button.diskstation_reboot",
      last_start_entity: "sensor.diskstation_letzter_start",
      shutdown_entity: "button.diskstation_shutdown",
    };
  }

  static getConfigForm() {
    const entity = (name) => ({ name, selector: { entity: {} } });
    const text = (name) => ({ name, selector: { text: {} } });
    const expandable = (name, title, schema) => ({ type: "expandable", name, title, flatten: true, schema });
    const labels = {
      title: "Titel",
      subtitle: "Untertitel",
      show_image: "Gerätebild anzeigen",
      image_url: "Eigenes Gerätebild (URL, optional)",
      temperature_entity: "Temperatur",
      cpu_entity: "CPU-Auslastung",
      memory_entity: "Speichernutzung / RAM",
      security_entity: "Sicherheitsstatus",
      inbound_entity: "Inbound / Download",
      outbound_entity: "Outbound / Upload",
      volume_title: "Titel",
      volume_percent_entity: "Verwendetes Volumen (%)",
      volume_used_entity: "Belegter Speicherplatz",
      volume_status_entity: "Status",
      drive1_title: "Titel",
      drive1_temperature_entity: "Temperatur",
      drive1_lifetime_entity: "Mindestrestlebensdauer unterschritten",
      drive1_sectors_entity: "Fehlerhafte Sektoren überschritten",
      drive1_status_entity: "Status",
      drive2_title: "Titel",
      drive2_temperature_entity: "Temperatur",
      drive2_lifetime_entity: "Mindestrestlebensdauer unterschritten",
      drive2_sectors_entity: "Fehlerhafte Sektoren überschritten",
      drive2_status_entity: "Status",
      update_title: "Titel",
      update_entity: "Update-Entität",
      reboot_entity: "Neustart",
      last_start_entity: "Letzter Start",
      shutdown_entity: "Herunterfahren",
    };

    return {
      schema: [
        expandable("general", "Allgemein", [text("title"), text("subtitle"), { name: "show_image", selector: { boolean: {} } }, text("image_url")]),
        expandable("system", "System", [entity("temperature_entity"), entity("cpu_entity"), entity("memory_entity"), entity("security_entity")]),
        expandable("network", "Netzwerk", [entity("inbound_entity"), entity("outbound_entity")]),
        expandable("volume", "Volume", [text("volume_title"), entity("volume_percent_entity"), entity("volume_used_entity"), entity("volume_status_entity")]),
        expandable("drive1", "Laufwerk 1", [text("drive1_title"), entity("drive1_temperature_entity"), entity("drive1_lifetime_entity"), entity("drive1_sectors_entity"), entity("drive1_status_entity")]),
        expandable("drive2", "Laufwerk 2", [text("drive2_title"), entity("drive2_temperature_entity"), entity("drive2_lifetime_entity"), entity("drive2_sectors_entity"), entity("drive2_status_entity")]),
        expandable("update", "Update", [text("update_title"), entity("update_entity")]),
        expandable("actions", "Aktionen", [entity("reboot_entity"), entity("last_start_entity"), entity("shutdown_entity")]),
      ],
      computeLabel: (schema) => labels[schema.name],
      computeHelper: (schema) => {
        if (schema.name === "image_url") return "Leer = freigestelltes DS720+-Standardbild.";
        if (schema.name === "volume_percent_entity") return "Prozentwert; Gesamt und Frei werden aus Prozent + belegtem Speicher berechnet.";
        return undefined;
      },
    };
  }

  setConfig(config) {
    this._config = { ...NasCard.getStubConfig(), ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    return 12;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 1 };
  }

  _state(entityId) {
    return entityId && this._hass?.states?.[entityId];
  }

  _format(entityId) {
    const state = this._state(entityId);
    if (!state) return "—";
    try {
      if (this._hass?.formatEntityState) return this._hass.formatEntityState(state);
    } catch (_) {}
    const unit = state.attributes?.unit_of_measurement;
    return `${state.state}${unit ? ` ${unit}` : ""}`;
  }

  _number(entityId) {
    const state = this._state(entityId);
    if (!state) return NaN;
    const value = Number(String(state.state).replace(",", "."));
    return Number.isFinite(value) ? value : NaN;
  }

  _formatNumber(value, unit = "") {
    if (!Number.isFinite(value)) return "—";
    const locale = this._hass?.locale?.language || navigator.language || "de-DE";
    const decimals = Math.abs(value) >= 100 ? 0 : Math.abs(value) >= 10 ? 1 : 2;
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: decimals }).format(value)}${unit ? ` ${unit}` : ""}`;
  }

  _tone(entityId) {
    const state = this._state(entityId);
    if (!state) return "neutral";
    const domain = state.entity_id?.split(".")[0];
    const value = String(state.state).toLowerCase();
    if (["unknown", "unavailable"].includes(value)) return "neutral";
    if (domain === "binary_sensor") return value === "on" ? "error" : "success";
    if (domain === "update") return value === "on" ? "warning" : "success";
    if (/error|fail|bad|critical|fault|degraded|problem/.test(value)) return "error";
    if (/warn|attention|pending/.test(value)) return "warning";
    if (/normal|ok|healthy|good|safe|secure|online|connected|optimal/.test(value)) return "success";
    return "neutral";
  }

  _volume() {
    const c = this._config;
    const percentState = this._state(c.volume_percent_entity);
    const usedState = this._state(c.volume_used_entity);
    let percent = this._number(c.volume_percent_entity);
    let used = this._number(c.volume_used_entity);
    let percentUnit = percentState?.attributes?.unit_of_measurement || "";
    let usedUnit = usedState?.attributes?.unit_of_measurement || "";

    if (percentUnit !== "%" && usedUnit === "%") {
      [percent, used] = [used, percent];
      [percentUnit, usedUnit] = [usedUnit, percentUnit];
    }
    if (Number.isFinite(percent) && percent <= 1 && percent > 0 && percentUnit !== "%") percent *= 100;
    percent = Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : NaN;
    const total = Number.isFinite(used) && Number.isFinite(percent) && percent > 0 ? used / (percent / 100) : NaN;

    return {
      percent,
      used,
      total,
      free: Number.isFinite(total) ? Math.max(0, total - used) : NaN,
      unit: usedUnit === "%" ? "" : usedUnit,
    };
  }

  _escape(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  _more(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } }));
  }

  async _press(entityId) {
    if (!entityId || !this._hass) return;
    const domain = entityId.split(".")[0];
    if (domain === "button") return this._hass.callService("button", "press", { entity_id: entityId });
    if (domain === "script") return this._hass.callService("script", "turn_on", { entity_id: entityId });
    return this._hass.callService("homeassistant", "toggle", { entity_id: entityId });
  }

  _metric(icon, entityId, label, tone = "neutral") {
    return `<button class="metric tone-${tone}" data-more="${this._escape(entityId)}"><ha-icon icon="${icon}"></ha-icon><span><b>${this._escape(this._format(entityId))}</b><small>${label}</small></span></button>`;
  }

  _network(icon, entityId, label, tone) {
    return `<button class="panel ncard tone-${tone}" data-more="${this._escape(entityId)}"><span class="round-icon"><ha-icon icon="${icon}"></ha-icon></span><div><small>${label}</small><b>${this._escape(this._format(entityId))}</b></div></button>`;
  }

  _drive(title, temp, life, sectors, status) {
    const item = (icon, entityId, label, tone) => `<button class="drive-metric tone-${tone}" data-more="${this._escape(entityId)}"><ha-icon icon="${icon}"></ha-icon><span><b>${this._escape(this._format(entityId))}</b><small>${label}</small></span></button>`;
    return `<section class="panel drive"><div class="drive-title"><ha-icon icon="mdi:harddisk"></ha-icon><b>${this._escape(title)}</b></div>${item("mdi:thermometer", temp, "Temperatur", "warning")}${item("mdi:heart-outline", life, "Restlebensdauer", this._tone(life))}${item("mdi:format-list-bulleted-square", sectors, "Sektoren", this._tone(sectors))}${item("mdi:check-circle-outline", status, "Status", this._tone(status))}</section>`;
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;
    const c = this._config;
    const volume = this._volume();
    const percent = Number.isFinite(volume.percent) ? volume.percent : 0;
    const image = c.image_url?.trim() || DEFAULT_NAS_IMAGE;

    this.shadowRoot.innerHTML = `<style>${NasCard.css}</style><ha-card><main>
      <section class="panel hero"><div class="title"><span class="title-icon"><ha-icon icon="mdi:nas"></ha-icon></span><div><h1>${this._escape(c.title)}</h1><p>${this._escape(c.subtitle)}</p></div></div>${c.show_image ? `<img src="${this._escape(image)}" alt="NAS">` : ""}<div class="metrics">${this._metric("mdi:thermometer", c.temperature_entity, "Temperatur", "primary")}${this._metric("mdi:cpu-64-bit", c.cpu_entity, "CPU")}${this._metric("mdi:memory", c.memory_entity, "RAM", "primary")}${this._metric("mdi:shield-check-outline", c.security_entity, "Sicherheitsstatus", this._tone(c.security_entity))}</div></section>
      <section class="network">${this._network("mdi:arrow-down", c.inbound_entity, "Inbound", "error")}${this._network("mdi:arrow-up", c.outbound_entity, "Outbound", "success")}</section>
      <section class="panel volume"><div class="donut" style="--p:${(percent * 3.6).toFixed(2)}deg"><div><b>${Number.isFinite(volume.percent) ? `${this._escape(this._formatNumber(volume.percent))} %` : "—"}</b><small>belegt</small></div></div><div class="volume-detail"><h2>${this._escape(c.volume_title)}</h2><strong>${this._escape(Number.isFinite(volume.used) ? this._formatNumber(volume.used, volume.unit) : this._format(c.volume_used_entity))}${Number.isFinite(volume.total) ? ` <em>/ ${this._escape(this._formatNumber(volume.total, volume.unit))}</em>` : ""}</strong><div class="volume-values"><span>Belegt</span><b>${this._escape(this._formatNumber(volume.used, volume.unit))}</b><span>Frei</span><b>${this._escape(this._formatNumber(volume.free, volume.unit))}</b><span>Gesamt</span><b>${this._escape(this._formatNumber(volume.total, volume.unit))}</b></div></div><button class="volume-status tone-${this._tone(c.volume_status_entity)}" data-more="${this._escape(c.volume_status_entity)}"><ha-icon icon="mdi:database"></ha-icon><b>${this._escape(this._format(c.volume_status_entity))}</b></button></section>
      ${this._drive(c.drive1_title, c.drive1_temperature_entity, c.drive1_lifetime_entity, c.drive1_sectors_entity, c.drive1_status_entity)}${this._drive(c.drive2_title, c.drive2_temperature_entity, c.drive2_lifetime_entity, c.drive2_sectors_entity, c.drive2_status_entity)}
      <button class="panel update tone-${this._tone(c.update_entity)}" data-more="${this._escape(c.update_entity)}"><span class="update-icon"><ha-icon icon="mdi:update"></ha-icon></span><span><b>${this._escape(c.update_title)}</b><small>${this._escape(this._format(c.update_entity))}</small></span><strong>${this._escape(this._format(c.update_entity))}</strong></button>
      <section class="footer"><button class="panel footer-card" data-press="${this._escape(c.reboot_entity)}"><span class="footer-icon"><ha-icon icon="mdi:restart"></ha-icon></span><span><b>Neustart</b><small>NAS neu starten</small></span></button><button class="panel footer-card" data-more="${this._escape(c.last_start_entity)}"><span class="footer-icon"><ha-icon icon="mdi:clock-outline"></ha-icon></span><span><b>Letzter Start</b><small>${this._escape(this._format(c.last_start_entity))}</small></span></button><button class="panel footer-card shutdown" data-press="${this._escape(c.shutdown_entity)}"><span class="footer-icon"><ha-icon icon="mdi:power"></ha-icon></span><span><b>Herunterfahren</b><small>NAS herunterfahren</small></span></button></section>
    </main></ha-card>`;

    this.shadowRoot.querySelectorAll("[data-more]").forEach((el) => { el.onclick = () => this._more(el.dataset.more); });
    this.shadowRoot.querySelectorAll("[data-press]").forEach((el) => { el.onclick = () => this._press(el.dataset.press); });
  }

  static get css() {
    return `
:host{display:block;width:100%;height:auto;min-width:0;container-type:inline-size;--bg:var(--ha-card-background,var(--card-background-color,#fff));--text:var(--primary-text-color,#111);--muted:var(--secondary-text-color,#777);--primary:var(--primary-color,#03a9f4);--success:var(--success-color,#4caf50);--warning:var(--warning-color,#ff9800);--error:var(--error-color,#f44336);--border:color-mix(in srgb,var(--divider-color,#888) 65%,transparent);--panel:color-mix(in srgb,var(--bg) 92%,var(--primary) 8%)}
*{box-sizing:border-box}button{font:inherit;color:inherit;cursor:pointer}ha-card{width:100%;height:auto;overflow:hidden;color:var(--text);background:radial-gradient(circle at 90% 0,color-mix(in srgb,var(--primary) 15%,transparent),transparent 31%),var(--bg);border:1px solid var(--border);border-radius:var(--ha-card-border-radius,18px)}main{padding:10px;display:grid;gap:8px}.panel{border:1px solid var(--border);border-radius:13px;background:linear-gradient(135deg,color-mix(in srgb,var(--panel) 89%,var(--primary) 11%),var(--panel))}.tone-primary{color:var(--primary)}.tone-success{color:var(--success)}.tone-warning{color:var(--warning)}.tone-error{color:var(--error)}.tone-neutral{color:var(--text)}
.hero{position:relative;min-height:158px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:12px;overflow:hidden}.title{display:flex;align-items:center;gap:11px;z-index:2;max-width:62%}.title-icon,.update-icon,.footer-icon{display:grid;place-items:center;background:color-mix(in srgb,var(--primary) 16%,transparent);color:var(--primary)}.title-icon{width:46px;height:46px;min-width:46px;border-radius:13px}.title-icon ha-icon{--mdc-icon-size:27px}h1{margin:0;font-size:clamp(22px,3.3cqw,31px);line-height:1}.title p{margin:5px 0 0;color:var(--muted);font-size:clamp(12px,1.55cqw,15px)}.hero img{position:absolute;right:2.5%;top:5px;width:min(31%,225px);max-height:130px;object-fit:contain;filter:drop-shadow(0 9px 12px #0004)}
.metrics{z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.metric{min-width:0;min-height:48px;border:1px solid var(--border);border-radius:11px;background:color-mix(in srgb,var(--bg) 78%,transparent);padding:7px 9px;display:flex;align-items:center;gap:7px;text-align:left}.metric>ha-icon{--mdc-icon-size:24px}.metric span,.drive-metric span,.update span,.footer-card>span:last-child{display:flex;flex-direction:column;gap:2px;min-width:0}.metric b,.drive-metric b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px}.metric small,.drive-metric small,.update small,.footer-card small,.ncard small{color:var(--muted);font-size:11px}
.network{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ncard{min-height:72px;padding:9px 12px;display:flex;align-items:center;gap:11px;text-align:left}.round-icon{width:42px;height:42px;min-width:42px;border-radius:50%;border:2px solid currentColor;display:grid;place-items:center}.round-icon ha-icon{--mdc-icon-size:22px}.ncard div{display:flex;flex-direction:column;gap:2px}.ncard b{color:var(--text);font-size:clamp(16px,2.1cqw,21px)}
.volume{min-height:145px;padding:10px 13px;display:grid;grid-template-columns:minmax(112px,.72fr) minmax(190px,1.35fr) minmax(105px,.58fr);gap:13px;align-items:center}.donut{width:min(122px,100%);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--primary) var(--p),color-mix(in srgb,var(--muted) 32%,transparent) 0);display:grid;place-items:center;position:relative}.donut::after{content:"";position:absolute;width:69%;aspect-ratio:1;border-radius:50%;background:var(--panel)}.donut>div{z-index:1;display:flex;flex-direction:column;align-items:center}.donut b{font-size:22px}.donut small{color:var(--muted);font-size:11px}.volume-detail{border-left:1px solid var(--border);padding-left:13px}.volume-detail h2{margin:0 0 5px;font-size:19px}.volume-detail>strong{font-size:18px}.volume-detail em{color:var(--muted);font-style:normal;font-weight:500}.volume-values{display:grid;grid-template-columns:1fr auto;gap:4px 10px;margin-top:9px;color:var(--muted);font-size:12px}.volume-values b{color:var(--text)}.volume-status{border:0;background:transparent;display:flex;flex-direction:column;align-items:center;gap:5px}.volume-status ha-icon{--mdc-icon-size:27px}.volume-status b{font-size:13px}
.drive{min-height:61px;padding:7px 10px;display:grid;grid-template-columns:minmax(105px,1.15fr) repeat(4,minmax(90px,1fr));align-items:stretch}.drive-title{display:flex;align-items:center;gap:8px}.drive-title ha-icon{--mdc-icon-size:24px}.drive-title b{font-size:14px}.drive-metric{min-width:0;border:0;border-left:1px solid var(--border);background:transparent;padding:5px 8px;display:flex;align-items:center;gap:6px;text-align:left}.drive-metric>ha-icon{--mdc-icon-size:21px}.update{width:100%;min-height:60px;padding:8px 11px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;text-align:left}.update-icon{width:42px;height:42px;border-radius:11px}.update-icon ha-icon{--mdc-icon-size:25px}.update span b{color:var(--text);font-size:15px}.update>strong{padding:5px 9px;border:1px solid currentColor;border-radius:999px;font-size:12px}
.footer{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.footer-card{min-height:68px;padding:8px 10px;display:flex;align-items:center;gap:9px;text-align:left}.footer-icon{width:44px;height:44px;min-width:44px;border-radius:12px}.footer-icon ha-icon{--mdc-icon-size:26px}.footer-card b{font-size:14px}.footer-card small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.shutdown .footer-icon{color:var(--error);background:color-mix(in srgb,var(--error) 15%,transparent)}
@container(max-width:720px){.metrics{grid-template-columns:1fr 1fr}.hero{min-height:210px}.hero img{width:43%;max-height:145px;opacity:.84}.volume{grid-template-columns:110px 1fr}.volume-status{grid-column:1/-1;flex-direction:row;justify-content:flex-end}.drive{grid-template-columns:1fr 1fr}.drive-title{grid-column:1/-1;padding-bottom:4px}.drive-metric{border-left:0;border-top:1px solid var(--border)}}
@container(max-width:500px){.hero{min-height:225px}.title{max-width:100%}.hero img{opacity:.22;width:62%;right:-8%}.network{grid-template-columns:1fr}.volume{grid-template-columns:1fr}.donut{justify-self:center}.volume-detail{border-left:0;border-top:1px solid var(--border);padding:10px 0 0}.volume-status{grid-column:auto;justify-content:center}.footer{grid-template-columns:1fr}}
`;
  }
}

if (!customElements.get("nas-card")) customElements.define("nas-card", NasCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "nas-card")) {
  window.customCards.push({ type: "nas-card", name: "NAS Card", description: "Theme-sensitive NAS dashboard card with native Home Assistant entity selectors.", preview: true, documentationURL: "https://github.com/BeGiBue/nas_card" });
}
console.info(`%c NAS CARD %c v${NAS_CARD_VERSION} `, "background:#03a9f4;color:white;font-weight:700", "background:#111;color:white");
