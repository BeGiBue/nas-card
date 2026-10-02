# Changelog

## 1.0.1 - 2026-10-02

- Lizenz auf GNU Affero General Public License v3.0 only (AGPL-3.0-only) umgestellt.
- Versionsangaben in Repository, README und Loader vereinheitlicht.
- HACS-Validierung für Pushes auf `main`, Pull Requests und manuelle Ausführung vorbereitet.
- README und Release-Unterlagen für die Veröffentlichung in HACS aktualisiert.

## 1.0.0 - 2026-10-02

- Erste öffentliche Veröffentlichung der NAS Card.
- Theme-sensitive Darstellung für Home Assistant Light/Dark Mode und eigene Themes.
- Native Home-Assistant-Konfiguration über `getConfigForm()` mit Entity-Pickern und Textfeldern.
- Frei editierbarer Titel und Untertitel; festes `mdi:nas` Symbol vor dem Haupttitel.
- Breite im Sections-Dashboard frei einstellbar; Höhe wird automatisch durch die Card bestimmt.
- Zentrierte Daten- und Statusdarstellung in den Feldern.
- Systemwerte für Temperatur, CPU, RAM/Speicher und Sicherheitsstatus.
- Inbound/Outbound-Anzeige in großen Statusfeldern.
- Volume-Tortendiagramm mit Belegt/Frei/Gesamt.
- Zwei Laufwerksbereiche mit Temperatur, Restlebensdauer, Sektoren und Status; Bezeichnungen stehen über den Zuständen.
- DSM/Update-Anzeige.
- Neustart, letzter Start und Herunterfahren in einer einheitlichen unteren Aktionszeile.
- "Letzter Start" auf zwei Zeilen begrenzt und mit Home Assistants automatischer Zustandsformatierung.
- Freigestelltes DS720+-Standardbild direkt in der JavaScript-Komponente eingebettet; optional durch eigene Bild-URL ersetzbar.
- HACS-Metadaten und manuell startbare HACS-Validierung enthalten.
