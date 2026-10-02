<p align="center">
  <img src="images/ds720plus.png" alt="Synology DS720+" width="360">
</p>

<h1 align="center">NAS Card</h1>

<p align="center">
  Theme-sensitive Home-Assistant-Custom-Card für NAS-Systeme – vorkonfiguriert für eine Synology DS720+.
</p>

<p align="center">
  <strong>Version 1.0.0</strong><br>
  <a href="https://github.com/BeGiBue/nas_card/actions/workflows/validate.yml"><img src="https://github.com/BeGiBue/nas_card/actions/workflows/validate.yml/badge.svg" alt="HACS validation"></a>
</p>

## Funktionen

- Theme-sensitive Darstellung für Light Mode, Dark Mode und benutzerdefinierte Home-Assistant-Themes
- Editierbarer Haupttitel und Untertitel über native Home-Assistant-Textfelder
- Festes `mdi:nas` Symbol vor dem Haupttitel
- Alle Entitäten über native Home-Assistant-Entity-Picker auswählbar
- Eingebettetes, freigestelltes DS720+-Bild; optional eigene Bild-URL verwendbar
- Temperatur, CPU, RAM/Speicher und Sicherheitsstatus
- Inbound- und Outbound-Durchsatz mit Live-Sparkline während der Kartenlaufzeit
- Volume-Auslastung als Tortendiagramm mit Belegt/Frei/Gesamt
- Zwei Laufwerksbereiche mit Temperatur, Restlebensdauer, Sektoren und Status
- DSM/Update-Anzeige
- Neustart, letzter Start und Herunterfahren in einer einheitlichen unteren Reihe
- "Letzter Start" besteht aus genau zwei Textzeilen und nutzt Home Assistants automatische Zustands-/Zeitformatierung
- Native Größenanpassung im Sections-Dashboard über `getGridOptions()`

## Standard-Entitäten

Die Card ist für folgende Entitäten aus deiner Synology-Konfiguration vorkonfiguriert:

```text
sensor.diskstation_temperatur
sensor.diskstation_cpu_auslastung_gesamt
sensor.diskstation_speichernutzung_real
binary_sensor.diskstation_sicherheitsstatus
sensor.diskstation_download_durchsatz
sensor.diskstation_upload_durchsatz
sensor.diskstation_volume_1_verwendetes_volumen
sensor.diskstation_volume_1_belegter_speicherplatz
sensor.diskstation_volume_1_status
sensor.diskstation_drive_1_temperatur
binary_sensor.diskstation_drive_1_unterhalb_der_mindestrestlebensdauer
binary_sensor.diskstation_drive_1_max_fehlerhafte_sektoren_uberschritten
sensor.diskstation_drive_1_status
sensor.diskstation_drive_2_temperatur
binary_sensor.diskstation_drive_2_unterhalb_der_mindestrestlebensdauer
binary_sensor.diskstation_drive_2_max_fehlerhafte_sektoren_uberschritten
sensor.diskstation_drive_2_status
update.diskstation_dsm_update
button.diskstation_reboot
sensor.diskstation_letzter_start
button.diskstation_shutdown
```

Alle Entitäten können im grafischen Karteneditor geändert werden. Dadurch ist die Card nicht auf die DS720+ beschränkt.

## Installation über HACS

### Automatisch

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=BeGiBue&repository=nas_card&category=plugin)

### Manuell

1. In HACS **Benutzerdefinierte Repositories** öffnen.
2. `https://github.com/BeGiBue/nas_card` hinzufügen.
3. Als Typ **Dashboard** auswählen.
4. **NAS Card** installieren.
5. Home Assistant bzw. den Browser vollständig neu laden.

Das Repository enthält eine HACS-Validierung unter `.github/workflows/validate.yml`. In `hacs.json` ist `nas-card.js` explizit als Plugin-Datei angegeben.

## Card hinzufügen

Minimal:

```yaml
type: custom:nas-card
```

Mit eigenen Bezeichnungen:

```yaml
type: custom:nas-card
title: DS720+
subtitle: Synology NAS
```

Vollständiges Beispiel mit den Standard-Entitäten:

```yaml
type: custom:nas-card
title: DS720+
subtitle: Synology NAS
show_image: true
temperature_entity: sensor.diskstation_temperatur
cpu_entity: sensor.diskstation_cpu_auslastung_gesamt
memory_entity: sensor.diskstation_speichernutzung_real
security_entity: binary_sensor.diskstation_sicherheitsstatus
inbound_entity: sensor.diskstation_download_durchsatz
outbound_entity: sensor.diskstation_upload_durchsatz
volume_title: Volume 1
volume_percent_entity: sensor.diskstation_volume_1_verwendetes_volumen
volume_used_entity: sensor.diskstation_volume_1_belegter_speicherplatz
volume_status_entity: sensor.diskstation_volume_1_status
drive1_title: Drive 1
drive1_temperature_entity: sensor.diskstation_drive_1_temperatur
drive1_lifetime_entity: binary_sensor.diskstation_drive_1_unterhalb_der_mindestrestlebensdauer
drive1_sectors_entity: binary_sensor.diskstation_drive_1_max_fehlerhafte_sektoren_uberschritten
drive1_status_entity: sensor.diskstation_drive_1_status
drive2_title: Drive 2
drive2_temperature_entity: sensor.diskstation_drive_2_temperatur
drive2_lifetime_entity: binary_sensor.diskstation_drive_2_unterhalb_der_mindestrestlebensdauer
drive2_sectors_entity: binary_sensor.diskstation_drive_2_max_fehlerhafte_sektoren_uberschritten
drive2_status_entity: sensor.diskstation_drive_2_status
update_title: DSM Update
update_entity: update.diskstation_dsm_update
reboot_entity: button.diskstation_reboot
last_start_entity: sensor.diskstation_letzter_start
shutdown_entity: button.diskstation_shutdown
```

## Grafischer Editor

Die Card verwendet Home Assistants aktuellen eingebauten Formular-Editor (`getConfigForm()`). Dadurch werden Titel und Untertitel als native Textfelder und Entitäten als native Entity-Picker dargestellt.

Die Gruppen **Allgemein**, **System**, **Netzwerk**, **Volume**, **Laufwerk 1**, **Laufwerk 2**, **Update** und **Aktionen** können im Editor aufgeklappt werden.

## Volume-Tortendiagramm

Für das Tortendiagramm werden zwei Werte verwendet:

- `volume_percent_entity`: Belegung in Prozent
- `volume_used_entity`: tatsächlich belegter Speicherplatz

Die Card berechnet daraus automatisch den Gesamt- und den freien Speicherplatz. Die Einheit des belegten Speicherplatzes wird dabei beibehalten.

## Bild

Das freigestellte Standardbild der DS720+ ist direkt in `nas-card.js` eingebettet. HACS muss deshalb keine zusätzliche Bilddatei installieren.

Optional kann im grafischen Editor eine eigene Bild-URL eingetragen werden, z. B.:

```yaml
image_url: /local/images/mein_nas.png
```

Mit `show_image: false` kann das Gerätebild vollständig ausgeblendet werden.

## Layout / Größe

In einem Home-Assistant-Sections-Dashboard unterstützt die Card das native Resize-Verhalten. Standardmäßig belegt sie 12 Spalten und 14 Reihen. Die Mindestgröße liegt bei 6 Spalten und 8 Reihen; die Höhe kann darüber hinaus weiter vergrößert werden.

Die Card passt ihr internes Layout responsiv an schmalere Größen an und bleibt innerhalb des von Home Assistant zugewiesenen Slots.

## Letzter Start

Die untere mittlere Kachel zeigt nur zwei Textzeilen:

```text
Letzter Start
<formatierter Home-Assistant-Zustand>
```

Die Ausgabe läuft über Home Assistants eigene `formatEntityState()`-Formatierung. Damit werden Sprache, Datums-/Zeitdarstellung und Home-Assistant-Locale automatisch berücksichtigt.

## Hinweise zu Marken

Dieses Projekt ist ein unabhängiges Community-Projekt und steht in keiner Verbindung zu Synology oder Home Assistant. Es wird weder von Synology noch von Home Assistant unterstützt oder herausgegeben.

**Synology** und **DiskStation** sind Marken ihrer jeweiligen Rechteinhaber.

## Lizenz

Creative Commons Attribution-NonCommercial 4.0 International (**CC BY-NC 4.0**).

Details stehen in [`LICENSE`](LICENSE).
