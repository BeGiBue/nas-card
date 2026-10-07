# NAS Card 1.0.0

Erste öffentliche Version der universell konfigurierbaren NAS Card für Home Assistant.

## Highlights

- Theme-sensitive Oberfläche im Stil der Eaton UPS Card
- Native Entity-Picker und native Textfelder im visuellen Editor
- Editierbarer Titel und Untertitel
- `mdi:nas` als festes Titelsymbol
- Breite im Home-Assistant-Sections-Dashboard frei einstellbar; Höhe automatisch
- Zentrierte Messwerte und Statusanzeigen in den Datenfeldern
- Volume-Belegung als Tortendiagramm mit Belegt/Frei/Gesamt
- Laufwerksbereiche mit Bezeichnung oben und Zustand darunter
- Einheitlich große Symbole in der unteren Aktionszeile
- "Letzter Start" mit Home-Assistant-Zeit-/Datumsformat und nur zwei Textzeilen
- Freigestelltes DS720+-Standardbild direkt in der JavaScript-Komponente eingebettet
- Optional eigene Bild-URL konfigurierbar

## Installation

Das Repository ist für die Installation als HACS-Dashboard-Plugin vorbereitet. `hacs.json` verweist auf `nas-card.js`.

Die HACS-Validierung wird bewusst nur manuell über GitHub Actions gestartet und läuft nicht automatisch bei jedem Push.

## Lizenz

GNU Affero General Public License v3.0 only (AGPL-3.0-only)
