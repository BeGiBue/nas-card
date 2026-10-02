# Release Checklist — v1.0.1

## Repository vorbereitet

- [x] `VERSION` steht auf `1.0.1`.
- [x] Öffentliche Versionskennung in `nas-card.js` steht auf `1.0.1`.
- [x] `CHANGELOG.md` für `1.0.1` aktualisiert.
- [x] `RELEASE_NOTES_1.0.1.md` vorbereitet.
- [x] `hacs.json` verweist auf `nas-card.js`.
- [x] HACS-Validierung ist für `main`, Pull Requests und manuelle Ausführung vorbereitet.
- [x] README beschreibt Installation, Konfiguration und aktuelles Layout.
- [x] `.github/CODEOWNERS` enthält `@BeGiBue`.
- [x] Lizenz auf AGPL-3.0-only für HACS Defaults umgestellt.

## Vor Veröffentlichung prüfen

- [ ] Finalen HACS-Validate-Lauf auf dem endgültigen `main`-Commit erfolgreich abschließen.
- [ ] Card in Home Assistant mit Light Mode prüfen.
- [ ] Card in Home Assistant mit Dark Mode prüfen.
- [ ] Visuellen Editor prüfen: Titel, Untertitel und alle Entity-Picker.
- [ ] Breitenänderung im Sections-Dashboard prüfen; Höhe darf nicht manuell skalierbar sein.
- [ ] Mobile Ansicht prüfen.
- [ ] Volume-Tortendiagramm mit realen NAS-Werten prüfen.
- [ ] Drive-Felder prüfen: Bezeichnung oben, Zustand darunter, Inhalte zentriert.
- [ ] Neustart/Herunterfahren mit den vorgesehenen Button-Entitäten prüfen.
- [ ] "Letzter Start" mit Home-Assistant-Zeitformat prüfen.

## Veröffentlichung

- [ ] Nach dem erfolgreichen finalen HACS-Lauf Tag `v1.0.1` auf dem finalen `main`-Commit erstellen.
- [ ] Danach GitHub Release `v1.0.1` mit dem Inhalt aus `RELEASE_NOTES_1.0.1.md` veröffentlichen.
- [ ] Erst danach den PR für `hacs/default` erstellen.
