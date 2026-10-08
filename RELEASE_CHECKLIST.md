# Release-Checkliste

Für jede neue Version `X.Y.Z`:

1. **Version an allen Stellen gleich setzen**
   - [ ] `VERSION`
   - [ ] `NAS_CARD_VERSION` und Kopfkommentar in `nas-card.js`
   - [ ] Versionszeile in der `README.md` (`<strong>Version X.Y.Z</strong>`)
   - [ ] neuer oberster Eintrag `## X.Y.Z - JJJJ-MM-TT` in `CHANGELOG.md`
2. **Release Notes**
   - [ ] `RELEASE_NOTES_X.Y.Z.md` anlegen (kurz, deutsch, aus dem CHANGELOG-Eintrag)
3. **Prüfen**
   - [ ] `node --check nas-card.js`
   - [ ] Card in Home Assistant prüfen: Light/Dark Mode, iPhone (kompakt), iPad, 7"-Raspberry-Kiosk (ggf. mit `scale`), grafischer Editor, Layout-Editor (Mindesthöhe)
   - [ ] Laufwerksboxen: Text bleibt in den Boxen, Werte rechtsbündig
   - [ ] Neustart/Herunterfahren mit Bestätigung (zweites Tippen)
4. **Veröffentlichen**
   - [ ] Pull Request nach `main`, Check „Validate“ (HACS) grün, mergen
   - [ ] GitHub → Releases → „Draft a new release“: Tag `vX.Y.Z` („Create new tag on publish“, Target `main`), Titel `vX.Y.Z`, Text aus `RELEASE_NOTES_X.Y.Z.md`
5. **Nachher**
   - [ ] In Home Assistant über HACS aktualisieren und das Frontend vollständig neu laden
   - [ ] Unter Einstellungen → Dashboards → Ressourcen nur einen Eintrag für `nas-card` (`/hacsfiles/nas-card/nas-card.js`)
