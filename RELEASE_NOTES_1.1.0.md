# NAS Card 1.1.0

Einzeldatei, Glas-Look und Optimierung für Hochformat, Touch und Kiosk-Displays.

## Änderungen

- Optimiert für iPhone, iPad und Raspberry-Pi-Kiosk: Schrift wächst mit der Kartenbreite, breites Layout ab 480 px (Option `layout`: `auto` | `wide` | `compact`)
- Einzeldatei: `nas-card.js` enthält jetzt alles, `nas-card-core.js` entfällt
- Glas-Look: Hintergrund, Rand und Blur kommen vom Theme; Messwerte linksbündig mit Icon-Chip; Warnfarben für CPU, RAM und Volume (orange ab 75/80/80 %, rot ab 90 %)
- Gerätebild groß im Hintergrund (Option `image_mode`: `background` | `inline`)
- Neustart und Herunterfahren verlangen ein zweites Tippen (`confirm_actions: false` schaltet es ab)
- Neue Option `scale` (0,8 – 1,8) für Kiosk-Displays; Neuzeichnen nur bei geänderten Werten

## Update

Über HACS aktualisieren und anschließend Home Assistant bzw. den Browser vollständig neu laden. Die Kartenkonfiguration bleibt kompatibel:

```yaml
type: custom:nas-card
```
