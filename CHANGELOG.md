# Changelog

## 1.0.0 - 2026-10-02

- Erste Veröffentlichung der NAS Card.
- Theme-sensitive Darstellung für Home Assistant Light/Dark Mode und eigene Themes.
- Native Home-Assistant-Konfiguration über `getConfigForm()` mit Entity-Pickern und Textfeldern.
- Frei editierbarer Titel und Untertitel; festes `mdi:nas` Symbol vor dem Haupttitel.
- Native Größenanpassung in Sections-Dashboards über `getGridOptions()`.
- Systemwerte für Temperatur, CPU, RAM/Speicher und Sicherheitsstatus.
- Inbound/Outbound-Anzeige mit Live-Sparkline während der Kartenlaufzeit.
- Volume-Tortendiagramm mit Belegt/Frei/Gesamt.
- Zwei Laufwerkszeilen mit Temperatur, Restlebensdauer, Sektoren und Status.
- DSM/Update-Anzeige.
- Neustart, letzter Start und Herunterfahren in einer einheitlichen unteren Aktionszeile.
- "Letzter Start" auf zwei Zeilen begrenzt und mit Home Assistants automatischer Zustandsformatierung.
- Freigestelltes DS720+-Bild in die JavaScript-Datei eingebettet; optional durch eigene Bild-URL ersetzbar.
