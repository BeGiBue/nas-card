# Release Checklist — v1.0.0

## Repository vorbereitet

- [x] `VERSION` steht auf `1.0.0`.
- [x] Öffentliche Versionskennung in `nas-card.js` steht auf `1.0.0`.
- [x] `CHANGELOG.md` für `1.0.0` aktualisiert.
- [x] `RELEASE_NOTES_1.0.0.md` aktualisiert.
- [x] `hacs.json` verweist auf `nas-card.js`.
- [x] HACS-Validierung ist vorhanden und nur manuell startbar.
- [x] README beschreibt die aktuelle eingebettete Bildlösung und das aktuelle Layout.
- [x] Lizenz: CC BY-NC 4.0.

## Vor Veröffentlichung prüfen

- [ ] HACS-Validierung manuell erfolgreich ausführen.
- [ ] Card in Home Assistant mit Light Mode prüfen.
- [ ] Card in Home Assistant mit Dark Mode prüfen.
- [ ] Visuellen Editor prüfen: Titel, Untertitel und alle Entity-Picker.
- [ ] Breitenänderung im Sections-Dashboard prüfen; Höhe darf nicht manuell skalierbar sein.
- [ ] Mobile Ansicht prüfen.
- [ ] Volume-Tortendiagramm mit realen Synology-Werten prüfen.
- [ ] Drive-Felder prüfen: Bezeichnung oben, Zustand darunter, Inhalte zentriert.
- [ ] Neustart/Herunterfahren mit den vorgesehenen Button-Entitäten prüfen.
- [ ] "Letzter Start" mit Home-Assistant-Zeitformat prüfen.

## Veröffentlichung

- [ ] Tag `v1.0.0` auf dem finalen `main`-Commit erstellen.
- [ ] GitHub Release `v1.0.0` mit dem Inhalt aus `RELEASE_NOTES_1.0.0.md` veröffentlichen.
