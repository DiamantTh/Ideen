---
layout: default
title: Streaming, Uploads und Formate
---

[← Zurück zu Medien, Musik, Creator und Streaming](../medien-musik-creator-und-streaming.md) | [← Startseite](../index.md)

# Streaming, Uploads und Formate

Einordnung: Dieser Abschnitt bündelt die wiederkehrenden Linien des Themas und macht sichtbar, wie sich praktische Beobachtungen, Kritik, Lösungsansätze und größere Leitideen ineinander verschränken.

### Schwerpunkt: ShadowSoul und Meyk Taruka
- Beide waren um 2010–2012 sehr aktiv und haben viel Herzblut investiert.
- Heute sind ihre Kanäle nur noch Nischenprojekte:
- ShadowSoul: eher Streams, weniger LPs, inzwischen auch Zweitkanal „MrShooshman“.
- Meyk Taruka: ab 2010 aktiv, 2014 Pause, 2015 über 2000 Videos gelöscht, 2018 Neustart. Heute nur unregelmäßig Uploads, aber mit Fancover-Songs und persönlichem Stil.
- Gedanke: Sie sind nicht die größten Namen, aber sie repräsentieren die kreative Seite der Szene – Mischung aus LP, Musik, Fandubs.

### Probleme der Archivierung
- Viele Videos haben keine vollständigen Beschreibungen mehr.
- Credits fehlen, wodurch Mitwirkende (z. B. Meyk Taruka bei „Ihr habt’s nicht anders gewollt“) in der offiziellen Liste nicht mehr auftauchen, obwohl sie mitgesungen haben.
- Nach 10–15 Jahren ist das schwer zu rekonstruieren → Erinnerungen und Stimmen bleiben, aber Dokumentation fehlt.

### Ausgangsproblem
- In der Vergangenheit hat Cider (Open-Source-Client für Apple Music) über MPRIS immer nur zensierte Tracknamen übergeben.
- Beispiel: „Arschgesicht“ von Knorkator wurde als „A*****t“ angezeigt.
- Am Handy wurde dies mit Tools wie Pano Scrobbler* korrigiert, am PC gab es in Cider keine entsprechende Option.

### Stand jetzt
- Überprüfungen mit mpris-scrobbler und discordrp-mpris zeigen: Titel wie „Arschgesicht“ werden mittlerweile uncensored an MPRIS übergeben.
- Logauszug bestätigte dies:

scrobbler::now_playing[Cider]: Arschgesicht//Knorkator//Es werde Nicht
- Das bedeutet: MusicKit gibt jetzt offenbar den vollen Titel weiter, und die Maskierung findet nur noch in der UI (z. B. Cider oder Apple-Music-App) statt.

### Unterschiedliche Ebenen der Zensur
- Explizit-Tag (E): Offizielle Markierung, die bei Songs mit contentRating=explicit gesetzt wird.
- Soft-Zensur/Wortfilter: Auch Songs ohne (E) können in der UI maskiert werden, wenn Wörter auf Apples interner „Badword“-Liste stehen.
- Ergebnis: Über MPRIS kommt der echte Name, in der UI erscheint weiterhin die zensierte Variante.

### Überlegungen zum Scrobbling
- Ursprünglich war geplant, für den Scrobbler manuell die zensierten Varianten zu hinterlegen.
- Da Cider/MPRIS inzwischen unzensiert liefert, ist dies nicht mehr nötig.
- Ausnahmefälle:
- Nutzer, die ihre Scrobbles bereits manuell korrigiert haben → mögliche Dubletten.
- Historische Scrobbles mit zensierten Titeln bleiben bestehen, außer man korrigiert sie nachträglich.
- Offizielle Apple-Music-Apps (macOS/iOS) könnten weiterhin zensierte Titel scrobbeln.

### Effiziente Produktionsstrategien
Statt CPU‑lastiger x264‑Encodes werden moderne Hardware‑Encoder wie NVENC, AMF oder AV1 als bessere Option hervorgehoben. Dadurch sparen Creator Ressourcen und Strom, während die Qualität für Streaming und VOD völlig ausreicht. CPU‑Power bleibt so frei für kreative oder rechenintensive Aufgaben wie Videoschnitt, Rendering oder Kompilierung.

### Chancen
- Jüngere passen sich leichter an neue Formate an (TikTok, Shorts, AI-Collabs).
- Sie sind flexibler und technikaffiner, was ein Vorteil sein kann.

### Überblick
Der Materiallage drehte sich stark um kulturelle Unterschiede zwischen Japan und dem Westen, insbesondere im Kontext der restriktiven Richtlinien von Square Enix bezüglich Livestreams und Videos zu Dragon Quest I & II HD‑2D Remake. Weitere Themen waren die Wirkung von Firmenentscheidungen im globalen Internet, soziale Dynamiken im Gaming-Bereich und Reflexionen über Medienbewertungen, die solche sozialen Faktoren oft ausklammern.

### Widerspruch zwischen öffentlicher Vorführung und privatem Medienkonsum
Ein weiterer wichtiger Entwicklungsschritt im Chat ist die Beobachtung, dass die Einschränkungen im öffentlichen Bereich mit den realen Nutzungsmöglichkeiten im privaten Bereich kaum noch zusammenpassen. Im Material verweist darauf, dass Blu-rays zu Hause problemlos geschaut werden können und Streaming-Dienste ohnehin jederzeit Inhalte verfügbar machen.

Damit verschiebt sich die Debatte von einer moralischen Frage zu einer systemischen Inkonsistenz. Wenn Erwachsene dieselben Filme privat ansehen, digital erwerben oder auf Abruf streamen können, dann wirkt ein Verbot öffentlicher Vorführung an bestimmten Feiertagen nicht mehr wie ein inhaltlicher Schutz, sondern wie ein rein symbolischer Eingriff in die Sichtbarkeit von Unterhaltung im öffentlichen Raum. Die Regel verliert dadurch an innerer Geschlossenheit. Sie sagt im Ergebnis nicht: „Dieser Inhalt ist unzumutbar“, sondern eher: „Dieser Inhalt soll an diesem Tag öffentlich nicht normal erscheinen.“

Genau dieser Unterschied ist für die Argumentation des Nutzers zentral. Er macht sichtbar, dass sich die Regelung weniger gegen den Inhalt selbst richtet als gegen dessen öffentliche Präsenz. Dadurch entsteht der Eindruck einer staatsgestützten Feiertagsmoral, die auf Sichtbarkeit, Normalität und kulturelles Erscheinungsbild zielt – nicht auf eine echte Gefahrenabwehr.

### Identitätsprobleme bei Video-Verfahren
Zusätzlich wurde ein technischer Einwand formuliert: Moderne Software kann Kamerabilder verfremden, durch 3D-Modelle ersetzen oder virtuell manipulieren. Gerade im gerichtlichen Kontext, wo Identität und persönlicher Eindruck wichtig sind, ist das ein relevanter Gedanke. Im Material entsteht hier vorausschauend und systemisch: Selbst digitale Lösungen brauchen Schutzmechanismen, weil sonst neue Unsicherheiten entstehen.

Das zeigt, dass seine Haltung nicht einfach „alles digital um jeden Preis“ lautet. Vielmehr geht es um brauchbare, glaubwürdige, zeitgemäße und zugleich robuste Kommunikationsformen.

### Nebenbefund: Screenshot-Uploader & Sicherheit
- Clientseitige Meldungen (Discord-Webhook, ReplayMod) sind nur für dich sichtbar.
- Zur Sicherheit Webhook rotieren und Autoupload deaktivieren, falls ungewollt. Hochgeladene Bilder ggf. im Kanal entfernen (Attachment-Links sind meist öffentlich zugänglich, wenn man den Link hat).

### Codex als Gegengewicht
Der von Codex gelieferte Befund brachte eine wichtige Korrektur: Wenn tatsächlich Prefix-Match gegen player->mpris_name oder player->name verwendet wird, müsste org.mpris.MediaPlayer2.firefox eigentlich auch auf org.mpris.MediaPlayer2.firefox.instance_ greifen. Damit verschob sich die Plausibilitätslage: Nicht das .instance_-Suffix wäre dann das Kernproblem, sondern eher, dass die Ignore-Liste gar nicht sauber geladen oder angewendet wird. Das ist eine wesentliche Entwicklung im Chat, weil sie zeigt, dass technische Analyse nicht starr war, sondern bereit, frühere Deutungen anhand neuer Informationen zu korrigieren.

### EndeavourOS als rollendes Umfeld
Die Einordnung deines Systems als EndeavourOS verstärkte diese Perspektive. Ein rolling release kann dazu führen, dass Firefox, Plasma oder Browser-Integrationen moderneres oder intensiveres MPRIS-Verhalten zeigen, während der eingesetzte Scrobbler auf einem älteren Stand bleibt. Diese Kombination ist als mögliches Langzeitproblem besonders plausibel: Nicht DBus oder MPRIS selbst müssen sich grundlegend geändert haben, sondern das Umfeld ist lebendiger geworden, während der Daemon in einer älteren Logik verharrt.

### Korrektur der ersten Annahmen
Zunächst stand kurz Last.fm im Raum, wurde aber rasch korrigiert: Tatsächlich ging es um ListenBrainz. Diese Korrektur war nicht nebensächlich, sondern zeigte, dass dir präzise Zuordnung wichtig ist. Es sollte keine allgemeine Diskussion über Scrobbling-Dienste werden, sondern eine konkrete Einordnung deines tatsächlichen Setups. Diese Präzision zog sich durch den weiteren Chat: Es ging nicht um abstrakte Erklärungen, sondern um den echten technischen Pfad von Player zu DBus zu MPRIS zu mpris-scrobbler zu ListenBrainz.

### Überblick und thematischer Kern
Dieser Chat drehte sich im Kern um ein technisches, aber zugleich sehr persönliches Frusterlebnis: Musik wird über ListenBrainz gehört, aber das tatsächliche Zählen und Erfassen der Streams wirkt unzuverlässig. Aus dieser zunächst alltagsnahen Beobachtung entwickelte sich schrittweise eine deutlich tiefere Analyse über DBus, MPRIS, Firefox als Störquelle, die interne Ignore-Logik von mpris-scrobbler, die Relevanz einzelner Commits sowie die grundsätzliche Frage nach dem Alter und der Robustheit von C-Code. Das Hauptthema des gesamten Verlaufs ist daher nicht bloß „Scrobbling funktioniert nicht“, sondern eher die systematische Untersuchung eines fehleranfälligen Linux-Scrobbling-Setups, bei dem Laufzeitverhalten, Protokollschichten, Konfigurationslogik und Softwarepflege zusammenkommen.

Schon früh war wichtig, dass das Problem nicht als bloßer Bedienfehler verstanden wurde. Die Ausgangsbeobachtung war, dass über etwa zwei Stunden Musik gehört wurde, aber nur ein Teil davon tatsächlich erfasst wurde. Daraus sprach einerseits Irritation, andererseits aber auch ein klares technisches Gespür: Es ging nie nur um ein diffuses „da stimmt was nicht“, sondern von Anfang an um den Verdacht, dass im Hintergrund ein konkreter technischer Mechanismus durcheinandergerät.

### Eindrücke aus den Videos
- In manchen Orten begegnet Noel Dederichs Bewohnern (z. B. im Hanfgarten, wo eine Frau erklärte, dass der Ort nichts mit Hanf, sondern mit Hafer zu tun hatte).
- In vielen anderen Ortschaften herrscht jedoch gähnende Leere: vielleicht ein Lieferwagen, ansonsten totale Stille. Besucher wirken fast wie Eindringlinge in diese abgeschotteten Orte.
- Der Kontrast zwischen lustigem Namen und ruhiger, nüchterner Realität erzeugt einen besonderen Charme der Videos.

### b) Belastungen
- Rohmaterial sichten (z. B. 10 Stunden Video → 1 Stunde Endprodukt).
- Schnitt, Musik, Kommentare, Recherchen, Grafik, Upload – alles erfordert viel Zeit und Konzentration.
- Hohe psychische Belastung, Schlafmangel, permanentes Denken an Content.

### Eigene Medienformate
- Aufbau eines Blogs oder Social-Media-Kanals zur Dokumentation politischer Fehlentwicklungen.
- Direkte, ehrliche Sprache mit Belegen, um Glaubwürdigkeit zu schaffen.
- Aufbau einer Bewegung, die Transparenz, Bürgernähe und Verantwortlichkeit einfordert.

### Sony PSP & PS Vita
- Früher Wechsel zu reinem Streaming: ATRAC3+ (.at3) auf PSP, ATRAC9 (.at9)/AAC/Ogg auf Vita.
- Dateien liegen meist direkt im Spielimage – „Album‑ähnlicher“ Charakter.

### Stationäre Konsolen (Auswahl)
- NES/SMS: reine PSG/APU‑Chips → NSF/VGM.
- SNES: SPC700 + DSP, .spc Dumps (Sequenz + kleine Samples).
- Mega Drive: FM‑Synth (YM2612) + PSG, VGM.
- PS1/PS2/N64/Saturn: Übergangshybride (Sequenz + Streaming/CD‑DA).
- GC/Wii/WiiU/Switch: BRSTM/BCSTM/BFSTM (Nintendo ADPCM) + gängige Streams.
- PS3/PS4/PS5/Xbox 360/One/Series: Standard‑Streams (Ogg, AAC, Opus, XMA).

### Zukunftsplanungen
- Tool‑Kurationsliste pflegen (aktiv gewartete Forks, CLI/GUI, Plattform‑Support).
- Automatisierte Pipelines: Batch‑Export (GBS→VGM→FLAC), Metadaten‑Normalisierung (Titel/Loop‑Points), Konvertierung nach Opus für Streaming.
- Dokubeiträge: Klare Unterscheidung ROM vs. GBS in Anleitungen; Screenshots/Belege gegen Fehlguides.

### Strukturüberblick
- 1. Kurzüberblick & Leitgedanken
- 2. Kernthemen & Zusammenhänge
- 3. Technische Grundlagen
- 3.1 Game Boy / Game Boy Color
- 3.2 Game Boy Advance
- 3.3 Nintendo DS
- 3.4 Nintendo 3DS
- 3.5 Sony PSP & PS Vita
- 3.6 Stationäre Konsolen (Auswahl)
- 4. Formate, Tools & Workflows
- 5. Interpretationen, Motive & Nuancen
- 6. Mögliche Umsetzungen
- 7. Zukunftsplanungen
- 8. Offene Fragen & nächste Schritte
- 9. Anhang: Begriffsklärungen

### Gedanken/Interessen
- Vergleichbarkeit der Plattformen abseits des Marketing‑Buzz (Advisors vs. echte Features).
- Producer‑Workflow mit Stems/Uploads/Arrangement ist dir wichtig.
- Kostenkontrolle via passendem Plan und Credit‑Management.

### Eigene Überlegungen und Zukunftsplanungen
- Orientierung an Blu-ray-Standards zur Sicherung einer hohen, aber effizienten Qualität.
- Nutzung von OBS für flexiblere Aufnahmen, gerade auch in Verbindung mit Shadow-PC.
- Bandicam wird zwar noch erwähnt, aber ist im Alltag weniger relevant, da Windows seltener genutzt wird.
- Zukunft: Fokus auf Linux-kompatible Lösungen (OBS, ffmpeg) und möglichst wenig Abhängigkeit von proprietärer Software.

Fazit:
Die Entwicklung von der FRAPS-Ära mit gigantischen Dateien hin zu OBS mit moderner GPU-beschleunigter Kompression zeigt klar, dass effiziente Formate heute Standard sind. Für die eigene Praxis lohnt es sich, sich an Blu-ray-Bitraten zu orientieren und OBS als Haupt-Tool einzusetzen, insbesondere für Shadow-PC-Integration und Linux-Kompatibilität.

---

[← Zurück zu Medien, Musik, Creator und Streaming](../medien-musik-creator-und-streaming.md) | [Startseite](../index.md)
