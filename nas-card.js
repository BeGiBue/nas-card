// NAS Card v1.0.0 — CC BY-NC 4.0 — BeGiBue
const NAS_CARD_VERSION = "1.0.0";
const DEFAULT_NAS_IMAGE = "data:image/webp;base64,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";

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
        expandable("general", "Allgemein", [
          text("title"),
          text("subtitle"),
          { name: "show_image", selector: { boolean: {} } },
          text("image_url"),
        ]),
        expandable("system", "System", [
          entity("temperature_entity"),
          entity("cpu_entity"),
          entity("memory_entity"),
          entity("security_entity"),
        ]),
        expandable("network", "Netzwerk", [entity("inbound_entity"), entity("outbound_entity")]),
        expandable("volume", "Volume", [
          text("volume_title"),
          entity("volume_percent_entity"),
          entity("volume_used_entity"),
          entity("volume_status_entity"),
        ]),
        expandable("drive1", "Laufwerk 1", [
          text("drive1_title"),
          entity("drive1_temperature_entity"),
          entity("drive1_lifetime_entity"),
          entity("drive1_sectors_entity"),
          entity("drive1_status_entity"),
        ]),
        expandable("drive2", "Laufwerk 2", [
          text("drive2_title"),
          entity("drive2_temperature_entity"),
          entity("drive2_lifetime_entity"),
          entity("drive2_sectors_entity"),
          entity("drive2_status_entity"),
        ]),
        expandable("update", "Update", [text("update_title"), entity("update_entity")]),
        expandable("actions", "Aktionen", [
          entity("reboot_entity"),
          entity("last_start_entity"),
          entity("shutdown_entity"),
        ]),
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

  // Home Assistant controls the width in Sections view. Height stays content-driven.
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 1,
    };
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
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId },
      }),
    );
  }

  async _press(entityId) {
    if (!entityId || !this._hass) return;
    const domain = entityId.split(".")[0];
    if (domain === "button") return this._hass.callService("button", "press", { entity_id: entityId });
    if (domain === "script") return this._hass.callService("script", "turn_on", { entity_id: entityId });
    return this._hass.callService("homeassistant", "toggle", { entity_id: entityId });
  }

  _metric(icon, entityId, label, tone = "neutral") {
    return `<button class="metric tone-${tone}" data-more="${this._escape(entityId)}">
      <ha-icon icon="${icon}"></ha-icon>
      <span><b>${this._escape(this._format(entityId))}</b><small>${label}</small></span>
    </button>`;
  }

  _network(icon, entityId, label, tone) {
    return `<button class="panel ncard tone-${tone}" data-more="${this._escape(entityId)}">
      <span class="round-icon"><ha-icon icon="${icon}"></ha-icon></span>
      <div><small>${label}</small><b>${this._escape(this._format(entityId))}</b></div>
    </button>`;
  }

  _drive(title, temp, life, sectors, status) {
    const item = (icon, entityId, label, tone) => `<button class="drive-metric tone-${tone}" data-more="${this._escape(entityId)}">
      <ha-icon icon="${icon}"></ha-icon>
      <span><b>${this._escape(this._format(entityId))}</b><small>${label}</small></span>
    </button>`;

    return `<section class="panel drive">
      <div class="drive-title"><ha-icon icon="mdi:harddisk"></ha-icon><b>${this._escape(title)}</b></div>
      ${item("mdi:thermometer", temp, "Temperatur", "warning")}
      ${item("mdi:heart-outline", life, "Restlebensdauer", this._tone(life))}
      ${item("mdi:format-list-bulleted-square", sectors, "Sektoren", this._tone(sectors))}
      ${item("mdi:check-circle-outline", status, "Status", this._tone(status))}
    </section>`;
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;

    const c = this._config;
    const volume = this._volume();
    const percent = Number.isFinite(volume.percent) ? volume.percent : 0;
    const image = c.image_url?.trim() || DEFAULT_NAS_IMAGE;

    this.shadowRoot.innerHTML = `
      <style>${NasCard.css}</style>
      <ha-card>
        <main>
          <section class="panel hero">
            <div class="title">
              <span class="title-icon"><ha-icon icon="mdi:nas"></ha-icon></span>
              <div><h1>${this._escape(c.title)}</h1><p>${this._escape(c.subtitle)}</p></div>
            </div>
            ${c.show_image ? `<img src="${this._escape(image)}" alt="NAS">` : ""}
            <div class="metrics">
              ${this._metric("mdi:thermometer", c.temperature_entity, "Temperatur", "primary")}
              ${this._metric("mdi:cpu-64-bit", c.cpu_entity, "CPU")}
              ${this._metric("mdi:memory", c.memory_entity, "RAM", "primary")}
              ${this._metric("mdi:shield-check-outline", c.security_entity, "Sicherheitsstatus", this._tone(c.security_entity))}
            </div>
          </section>

          <section class="network">
            ${this._network("mdi:arrow-down", c.inbound_entity, "Inbound", "error")}
            ${this._network("mdi:arrow-up", c.outbound_entity, "Outbound", "success")}
          </section>

          <section class="panel volume">
            <div class="donut" style="--p:${(percent * 3.6).toFixed(2)}deg">
              <div><b>${Number.isFinite(volume.percent) ? `${this._escape(this._formatNumber(volume.percent))} %` : "—"}</b><small>belegt</small></div>
            </div>
            <div class="volume-detail">
              <h2>${this._escape(c.volume_title)}</h2>
              <strong>${this._escape(Number.isFinite(volume.used) ? this._formatNumber(volume.used, volume.unit) : this._format(c.volume_used_entity))}${Number.isFinite(volume.total) ? ` <em>/ ${this._escape(this._formatNumber(volume.total, volume.unit))}</em>` : ""}</strong>
              <div class="volume-values">
                <span>Belegt</span><b>${this._escape(this._formatNumber(volume.used, volume.unit))}</b>
                <span>Frei</span><b>${this._escape(this._formatNumber(volume.free, volume.unit))}</b>
                <span>Gesamt</span><b>${this._escape(this._formatNumber(volume.total, volume.unit))}</b>
              </div>
            </div>
            <button class="volume-status tone-${this._tone(c.volume_status_entity)}" data-more="${this._escape(c.volume_status_entity)}">
              <ha-icon icon="mdi:database"></ha-icon>
              <b>${this._escape(this._format(c.volume_status_entity))}</b>
            </button>
          </section>

          ${this._drive(c.drive1_title, c.drive1_temperature_entity, c.drive1_lifetime_entity, c.drive1_sectors_entity, c.drive1_status_entity)}
          ${this._drive(c.drive2_title, c.drive2_temperature_entity, c.drive2_lifetime_entity, c.drive2_sectors_entity, c.drive2_status_entity)}

          <button class="panel update tone-${this._tone(c.update_entity)}" data-more="${this._escape(c.update_entity)}">
            <span class="update-icon"><ha-icon icon="mdi:update"></ha-icon></span>
            <span><b>${this._escape(c.update_title)}</b><small>${this._escape(this._format(c.update_entity))}</small></span>
            <strong>${this._escape(this._format(c.update_entity))}</strong>
          </button>

          <section class="footer">
            <button class="panel footer-card" data-press="${this._escape(c.reboot_entity)}">
              <span class="footer-icon"><ha-icon icon="mdi:restart"></ha-icon></span>
              <span><b>Neustart</b><small>NAS neu starten</small></span>
            </button>
            <button class="panel footer-card" data-more="${this._escape(c.last_start_entity)}">
              <span class="footer-icon"><ha-icon icon="mdi:clock-outline"></ha-icon></span>
              <span><b>Letzter Start</b><small>${this._escape(this._format(c.last_start_entity))}</small></span>
            </button>
            <button class="panel footer-card shutdown" data-press="${this._escape(c.shutdown_entity)}">
              <span class="footer-icon"><ha-icon icon="mdi:power"></ha-icon></span>
              <span><b>Herunterfahren</b><small>NAS herunterfahren</small></span>
            </button>
          </section>
        </main>
      </ha-card>`;

    this.shadowRoot.querySelectorAll("[data-more]").forEach((el) => {
      el.onclick = () => this._more(el.dataset.more);
    });
    this.shadowRoot.querySelectorAll("[data-press]").forEach((el) => {
      el.onclick = () => this._press(el.dataset.press);
    });
  }

  static get css() {
    return `
      :host {
        display: block;
        width: 100%;
        height: auto;
        min-width: 0;
        container-type: inline-size;
        --bg: var(--ha-card-background, var(--card-background-color, #fff));
        --text: var(--primary-text-color, #111);
        --muted: var(--secondary-text-color, #777);
        --primary: var(--primary-color, #03a9f4);
        --success: var(--success-color, #4caf50);
        --warning: var(--warning-color, #ff9800);
        --error: var(--error-color, #f44336);
        --border: color-mix(in srgb, var(--divider-color, #888) 65%, transparent);
        --panel: color-mix(in srgb, var(--bg) 92%, var(--primary) 8%);
      }

      * { box-sizing: border-box; }
      button { font: inherit; color: inherit; cursor: pointer; }

      ha-card {
        width: 100%;
        height: auto;
        overflow: hidden;
        color: var(--text);
        background:
          radial-gradient(circle at 90% 0, color-mix(in srgb, var(--primary) 15%, transparent), transparent 31%),
          var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--ha-card-border-radius, 18px);
      }

      main {
        padding: 10px;
        display: grid;
        gap: 8px;
      }

      .panel {
        border: 1px solid var(--border);
        border-radius: 13px;
        background: linear-gradient(135deg, color-mix(in srgb, var(--panel) 89%, var(--primary) 11%), var(--panel));
      }

      .tone-primary { color: var(--primary); }
      .tone-success { color: var(--success); }
      .tone-warning { color: var(--warning); }
      .tone-error { color: var(--error); }
      .tone-neutral { color: var(--text); }

      .hero {
        position: relative;
        min-height: 158px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 12px;
        overflow: hidden;
      }

      .title {
        display: flex;
        align-items: center;
        gap: 11px;
        z-index: 2;
        max-width: 62%;
      }

      .title-icon,
      .update-icon,
      .footer-icon {
        display: grid;
        place-items: center;
        background: color-mix(in srgb, var(--primary) 16%, transparent);
        color: var(--primary);
      }

      .title-icon {
        width: 46px;
        height: 46px;
        min-width: 46px;
        border-radius: 13px;
      }

      .title-icon ha-icon { --mdc-icon-size: 27px; }

      h1 {
        margin: 0;
        font-size: clamp(22px, 3.3cqw, 31px);
        line-height: 1;
      }

      .title p {
        margin: 5px 0 0;
        color: var(--muted);
        font-size: clamp(12px, 1.55cqw, 15px);
      }

      .hero img {
        position: absolute;
        right: 2.5%;
        top: 5px;
        width: min(31%, 225px);
        max-height: 130px;
        object-fit: contain;
        filter: drop-shadow(0 9px 12px #0004);
      }

      .metrics {
        z-index: 2;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 7px;
      }

      .metric {
        min-width: 0;
        min-height: 48px;
        border: 1px solid var(--border);
        border-radius: 11px;
        background: color-mix(in srgb, var(--bg) 78%, transparent);
        padding: 7px 9px;
        display: flex;
        align-items: center;
        gap: 7px;
        text-align: left;
      }

      .metric > ha-icon { --mdc-icon-size: 24px; }
      .metric span,
      .drive-metric span,
      .update span,
      .footer-card > span:last-child {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .metric b,
      .drive-metric b {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }

      .metric small,
      .drive-metric small,
      .update small,
      .footer-card small,
      .ncard small {
        color: var(--muted);
        font-size: 11px;
      }

      .network {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .ncard {
        min-height: 72px;
        padding: 9px 12px;
        display: flex;
        align-items: center;
        gap: 11px;
        text-align: left;
      }

      .round-icon {
        width: 42px;
        height: 42px;
        min-width: 42px;
        border-radius: 50%;
        border: 2px solid currentColor;
        display: grid;
        place-items: center;
      }

      .round-icon ha-icon { --mdc-icon-size: 22px; }
      .ncard div { display: flex; flex-direction: column; gap: 2px; }
      .ncard b { color: var(--text); font-size: clamp(16px, 2.1cqw, 21px); }

      .volume {
        min-height: 145px;
        padding: 10px 13px;
        display: grid;
        grid-template-columns: minmax(112px, .72fr) minmax(190px, 1.35fr) minmax(105px, .58fr);
        gap: 13px;
        align-items: center;
      }

      .donut {
        width: min(122px, 100%);
        aspect-ratio: 1;
        border-radius: 50%;
        background: conic-gradient(var(--primary) var(--p), color-mix(in srgb, var(--muted) 32%, transparent) 0);
        display: grid;
        place-items: center;
        position: relative;
      }

      .donut::after {
        content: "";
        position: absolute;
        width: 69%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--panel);
      }

      .donut > div {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .donut b { font-size: 22px; }
      .donut small { color: var(--muted); font-size: 11px; }

      .volume-detail {
        border-left: 1px solid var(--border);
        padding-left: 13px;
      }

      .volume-detail h2 {
        margin: 0 0 5px;
        font-size: 19px;
      }

      .volume-detail > strong { font-size: 18px; }
      .volume-detail em { color: var(--muted); font-style: normal; font-weight: 500; }

      .volume-values {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4px 10px;
        margin-top: 9px;
        color: var(--muted);
        font-size: 12px;
      }

      .volume-values b { color: var(--text); }

      .volume-status {
        border: 0;
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }

      .volume-status ha-icon { --mdc-icon-size: 27px; }
      .volume-status b { font-size: 13px; }

      .drive {
        min-height: 61px;
        padding: 7px 10px;
        display: grid;
        grid-template-columns: minmax(105px, 1.15fr) repeat(4, minmax(90px, 1fr));
        align-items: stretch;
      }

      .drive-title {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .drive-title ha-icon { --mdc-icon-size: 24px; }
      .drive-title b { font-size: 14px; }

      .drive-metric {
        min-width: 0;
        border: 0;
        border-left: 1px solid var(--border);
        background: transparent;
        padding: 5px 8px;
        display: flex;
        align-items: center;
        gap: 6px;
        text-align: left;
      }

      .drive-metric > ha-icon { --mdc-icon-size: 21px; }

      .update {
        width: 100%;
        min-height: 60px;
        padding: 8px 11px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 10px;
        text-align: left;
      }

      .update-icon {
        width: 42px;
        height: 42px;
        border-radius: 11px;
      }

      .update-icon ha-icon { --mdc-icon-size: 25px; }
      .update span b { color: var(--text); font-size: 15px; }
      .update > strong {
        padding: 5px 9px;
        border: 1px solid currentColor;
        border-radius: 999px;
        font-size: 12px;
      }

      .footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .footer-card {
        min-height: 68px;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        gap: 9px;
        text-align: left;
      }

      .footer-icon {
        width: 44px;
        height: 44px;
        min-width: 44px;
        border-radius: 12px;
      }

      .footer-icon ha-icon { --mdc-icon-size: 26px; }
      .footer-card b { font-size: 14px; }
      .footer-card small {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      .shutdown .footer-icon {
        color: var(--error);
        background: color-mix(in srgb, var(--error) 15%, transparent);
      }

      @container (max-width: 720px) {
        .metrics { grid-template-columns: 1fr 1fr; }
        .hero { min-height: 210px; }
        .hero img { width: 43%; max-height: 145px; opacity: .84; }
        .volume { grid-template-columns: 110px 1fr; }
        .volume-status { grid-column: 1 / -1; flex-direction: row; justify-content: flex-end; }
        .drive { grid-template-columns: 1fr 1fr; }
        .drive-title { grid-column: 1 / -1; padding-bottom: 4px; }
        .drive-metric { border-left: 0; border-top: 1px solid var(--border); }
      }

      @container (max-width: 500px) {
        .hero { min-height: 225px; }
        .title { max-width: 100%; }
        .hero img { opacity: .22; width: 62%; right: -8%; }
        .network { grid-template-columns: 1fr; }
        .volume { grid-template-columns: 1fr; }
        .donut { justify-self: center; }
        .volume-detail { border-left: 0; border-top: 1px solid var(--border); padding: 10px 0 0; }
        .volume-status { grid-column: auto; justify-content: center; }
        .footer { grid-template-columns: 1fr; }
      }
    `;
  }
}

if (!customElements.get("nas-card")) customElements.define("nas-card", NasCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "nas-card")) {
  window.customCards.push({
    type: "nas-card",
    name: "NAS Card",
    description: "Theme-sensitive NAS dashboard card with native Home Assistant entity selectors.",
    preview: true,
    documentationURL: "https://github.com/BeGiBue/nas_card",
  });
}
console.info(`%c NAS CARD %c v${NAS_CARD_VERSION} `, "background:#03a9f4;color:white;font-weight:700", "background:#111;color:white");
