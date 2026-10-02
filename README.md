<p align="center">
  <img src="https://raw.githubusercontent.com/BeGiBue/nas_card/main/images/ds720plus.png" alt="Synology DS720+" width="360">
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
- Freigestelltes DS720+-Bild im Repository; optional eigene Bild-URL verwendbar
- Temperatur, CPU, RAM/Speicher und Sicherheitsstatus
- Inbound- und Outbound-Durchsatz in zwei großen Statusfeldern
- Volume-Auslastung als Tortendiagramm mit Belegt/Frei/Gesamt
- Zwei Laufwerksbereiche mit Temperatur, Restlebensdauer, Sektoren und Status
- DSM/Update-Anzeige
- Neustart, letzter Start und Herunterfahren in einer einheitlichen unteren Reihe
- "Letzter Start" besteht aus genau zwei Textzeilen und nutzt Home Assistants automatische Zustands-/Zeitformatierung
- Breite im Sections-Dashboard frei von 1 bis 12 Spalten einstellbar
- Höhe wird automatisch durch die Card bestimmt und ist nicht manuell skalierbar

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

Das freigestellte Standardbild liegt unter `images/ds720plus.png`. Die Card lädt es standardmäßig direkt aus diesem GitHub-Repository. HACS selbst installiert bei einem Dashboard-Plugin nur die JavaScript-Datei.

Für eine vollständig lokale Installation oder ein anderes NAS kann im grafischen Editor eine eigene Bild-URL eingetragen werden, z. B.:

```yaml
image_url: /local/images/mein_nas.png
```

Mit `show_image: false` kann das Gerätebild vollständig ausgeblendet werden.

## Layout / Größe

Im Home-Assistant-Sections-Dashboard ist die Breite frei einstellbar. Die Card startet mit 12 Spalten und erlaubt den kompletten Bereich von 1 bis 12 Spalten.

Die Höhe wird bewusst nicht als Grid-Größe vorgegeben. Home Assistant lässt die Card damit die benötigte Höhe selbst bestimmen; eine manuelle Höhen-Skalierung wird nicht angeboten. Das Layout ist gegenüber der ersten Version deutlich kompakter und orientiert sich von den Abständen und Proportionen an der Eaton UPS Card. Bei schmalen Breiten passt sich die interne Anordnung automatisch an.

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