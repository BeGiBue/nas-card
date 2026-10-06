# NAS Card 1.1.1

Feinschliff für iPad und Sections-Dashboard.

## Änderungen

- Laufwerke: Bezeichnung links, Wert rechts – wie in der Volume-Box; Status als Pill im Kopf
- Kompakter für das iPad Pro 13": Netzwerkwerte im breiten Layout einzeilig, geringere Abstände
- Titel beginnt oben auf gleicher Höhe wie bei der Eaton UPS Card

## Behoben

- Mindesthöhe (`min_rows`): Im Layout-Editor lassen sich nicht mehr zu wenige Zeilen einstellen
- Ein noch geladener alter 1.0.1-Loader kann die Laufwerksanzeige nicht mehr überschreiben

## Update

Über HACS aktualisieren und anschließend Home Assistant bzw. den Browser vollständig neu laden. Falls unter Einstellungen → Dashboards → Ressourcen mehr als ein Eintrag für `nas-card` steht, nur den von HACS (`/hacsfiles/nas-card/nas-card.js`) behalten.
