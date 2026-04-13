---
layout: default
title: Minecraft, Server, Modding und Community
---

[← Zurück zur Startseite](index.md)

# Minecraft-Server-Modding-und-Community


Diese Datei behandelt die Minecraft-bezogenen Inhalte des Bestands als eigenständiges Themenfeld aus Technik, Community, Regeln, Ökonomie und Spielkultur. Sie soll zeigen, wie stark Serverpraxis, Modding und soziale Dynamik ineinander greifen.

## Einordnung und Kontext


Diese Datei behandelt die Minecraft-bezogenen Inhalte des Bestands als eigenständiges Themenfeld aus Technik, Community, Regeln, Ökonomie und Spielkultur. Sie soll zeigen, wie stark Serverpraxis, Modding und soziale Dynamik ineinander greifen.

## Meine Gedanken


Im Zentrum steht die Beobachtung, dass Minecraft-Ökosysteme nicht nur aus Spielmechanik bestehen, sondern aus Verwaltung, Rollen, Regeln, Fairness, kreativer Freiheit und wirtschaftlichen Anreizen. Die leitende Perspektive prüft diese Systeme danach, ob sie nachvollziehbar, spielerisch sinnvoll und gemeinschaftlich tragfähig bleiben.

## Ideen


Die Ideen reichen von Modding, Launcher- und Serverstrukturen über Exploits, Itemökonomie und Eventlogiken bis hin zu Community-Regeln und inhaltlicher Gestaltung. Dabei wird mehrfach sichtbar, dass technische Entscheidungen sofort soziale Folgen im Serveralltag haben.

## Interessante Punkte


Auffällig ist die Mischung aus Detailwissen und Systemblick. Was zunächst wie einzelne Serverfragen wirkt, wird immer wieder zu einer Reflexion über Spielkultur, Community-Steuerung, Verantwortung und kreative Ökosysteme ausgeweitet.

## Moegliche Umsetzungen


Mögliche Umsetzungen betreffen transparentere Regeln, ausgewogenere Ökonomien, robustere Serverstrukturen, bessere Inhalte und fairere Community-Mechaniken. Die Datei ist dadurch nicht nur Dokumentation, sondern auch Material für konkrete Server- und Moddingentscheidungen.

## Zukunftsplanungen


Für die Zukunft deutet das Material auf weiter ausgearbeitete Serverkonzepte, Tooling, Regelwerke und Content-Strategien hin. Die hier gebündelten Punkte können als eigenständige Grundlage für spätere Projekte und Entscheidungen dienen.

## Ausfuehrliche thematische Darstellung


Diese Datei führt die Minecraft-bezogenen Inhalte des Bestands zu einer eigenständigen Themenfassung zusammen. Sie behandelt Serverpraxis, Modding, Community-Regeln, Ökonomie, Exploits, Inhalte und technische Fragen als Teil eines zusammenhängenden Ökosystems. Dadurch soll die Datei auch ohne Vorwissen über die Ursprungsdateien lesbar und nachvollziehbar sein.

## Serverbetrieb, Versionen und Welten


Einordnung: Dieser Abschnitt bündelt die wiederkehrenden Linien des Themas und macht sichtbar, wie sich praktische Beobachtungen, Kritik, Lösungsansätze und größere Leitideen ineinander verschränken.

### Was rechtlich zählt (Kurzfassung)
- Art. 12 DSGVO: Rechte erleichtern, leicht zugänglich, klare und elektronische Kommunikation.
- Art. 15 DSGVO: Auskunftsrecht, 1‑Monats‑Frist (+2 bei Begründung), erste Kopie kostenlos, bevorzugt elektronische Antwort.
- Art. 3(2) DSGVO: Gilt auch außerhalb der EU, wenn EU‑Nutzer adressiert/überwacht werden.
- Art. 11 DSGVO: Wenn keine eindeutige Zuordnung möglich → zusätzliche Infos anfordern (ohne Schikane).

### Spam‑/Bot‑Schutz ohne Portal
- Separate Mailbox, Greylisting, DNSBL, SPF/DKIM/DMARC, Auto‑Reply Rate‑Limit.
- Optional: jährlich drehbarer Alias privacy+2025@… (Alt‑Alias weiterleiten).

### Optionaler Komfort ohne Mehraufwand
- Discord/TS nur als Zubringer: Slash‑Command /privacy → Deep‑Link/Info → am Ende läuft es immer per Mail.
- Statusinfos per Mail/DM; kein eigenes Portal nötig.

### Export ohne Scripting
- phpMyAdmin‑Bookmarks mit Platzhalter /[UUID]/ → „UUID rein, CSV raus“.
- Essentials‑YAML direkt beilegen; Logs nach UUID filtern (nur eigene Zeilen).
- Pseudonymisierung für Dritte („Spieler#123“).
- Nicht herausgeben: Passworthashes/salts, Anti‑Cheat‑Signaturen; stattdessen Metainfo.

### OSS statt Blackbox‑Plugin
- Obfuskierte „GDPR‑Plugins“ meiden; Eigenlösung: /privacy accept → speichert uuid und timestamp (SQLite/YAML oder als LuckPerms‑Meta).
- Export‑Befehl nur für Staff; Repro‑Build, signierte Releases, AGPL/GPL.

### Textbausteine (Auswahl)
- Identität unklar / Art. 11: Bitte um zusätzliche Zuordnungen (frühere Mail, Nick+Hostmask/TS‑UID, letzte Login‑Zeit).
- Anonymisierung statt Komplett‑Löschung: Erklärung zu Meinungs‑/Informationsfreiheit und Entfernung des Personenbezugs.
- Backup‑Hinweis: Historische Off‑site‑Backups werden nicht editiert und fristgerecht überschrieben.

### To‑Dos & Roadmap (deine nächsten Schritte)
- Mail‑Only‑Flow finalisieren: Auto‑Reply, Checkliste, mailto:‑Baustein.
- phpMyAdmin‑Bookmarks anlegen: LuckPerms / LiteBans / CoreProtect‑Chat/Commands.
- Essentials‑YAML als feste DSAR‑Quelle definieren.
- Policy‑Snippets veröffentlichen (Discord/Website): „Wie stelle ich eine Anfrage? Was passiert dann?“
- Langfristig (Optional): kleines OSS‑Plugin „PrivacyConfirm“ (LP‑Meta‑Speicherung + Export).

### Kurze Antwortbausteine (für Diskussionen/Foren)
- „Button oder nix?“ – „Button ist nice‑to‑have, Pflicht ist elektronisch & leicht zugänglich. E‑Mail erfüllt das, wenn sichtbar und sauber verarbeitet.“
- „Firma sitzt nicht in der EU“ – „Art. 3(2): Zielgruppe/Überwachung in der EU → DSGVO gilt trotzdem.“
- „Warum willst du das wissen?“ – „Transparenz & Sicherheit: Spieler dürfen sehen, was gespeichert ist (Art. 15), Fehler berichtigen und Retention verstehen.“

### Dateien & Formate (Empfehlung)
- Lieferformat: ZIP mit /readme.md, /meta.json, /daten/.csv|.json|.txt, /essentials/<uuid>.yml.
- Benennung: YYYY‑MM‑DD_DSAR_<uuid|name>.zip.
- Retention intern: DSAR‑Akte 3 Jahre (Orientierung; je nach Rechtslage anpassen).

Fazit:* Du kannst DSARs ohne neues Portal und ohne Scripting robust abwickeln: Mail‑Only‑Prozess + phpMyAdmin‑Bookmarks + klare Policies. Für Minecraft/Legacy reicht das in 90 % der Fälle – transparent, prüfbar, wartungsarm.

### Kontext des Gesprächs
Das Gespräch fand in einem Discord-Channel mit dem Thema "kleine-fragen" statt und drehte sich um die Altersfreigabe von Discord sowie deren Auswirkungen auf Clans, insbesondere im Umfeld von OPSucht (Minecraft-Servernetzwerk). Es wurden verschiedene rechtliche, technische und soziale Aspekte beleuchtet.

### Rechtlicher Rahmen
- In der EU liegt das Mindestalter für die Nutzung von Discord laut DSGVO bei 16 Jahren.
- In anderen Regionen (z. B. USA) reicht oft ein Mindestalter von 13 Jahren.
- Die Altersfreigabe ist rechtlich motiviert, um den Datenschutz bei Minderjährigen zu gewährleisten.

### Technische Umsetzung
- Discord selbst führt keine strenge Altersprüfung durch. Es gibt keine verpflichtende Identitätsverifikation.
- Einfache Umgehung durch falsches Geburtsdatum bei der Kontoerstellung ist problemlos möglich.
- Altersprüfungen durch Discord erfolgen meist nur nach Meldung oder bei bestimmten Verhaltensauffälligkeiten.

### Reaktionen von Jüngeren (13–15 Jahre)
- Viele jüngere Nutzer empfinden Altersgrenzenkontrollen als überzogen oder bevormundend.
- Eine gezielte Altersjagd durch ältere Mitglieder wird oft als unfair oder herablassend wahrgenommen.
- Trotz der Regeln wollen viele einfach "nur mitspielen" und tun niemandem aktiv etwas.

### Eigene Serverstrukturen
- Denkbar wäre die Entwicklung oder Förderung von Discord-Alternativen mit besserer Altersverifikation, ohne gleich Ausweispflicht zu erzwingen.
- Integration von z. B. WebAuthn oder datensparsamen Altersbestätigungen in Clansysteme wäre eine Idee.

### RX 9070 und RX 9070 XT
- Stärkere Varianten mit 16 GB VRAM.
- Höhere Compute-Units und Leistung für 1440p oder 4K.
- 9070 XT: High-End mit mehr Stromverbrauch (~300 W).
- Zielgruppe: Enthusiasten, die maximale Performance wollen.

### Beobachtete UI-/Chat-Hinweise
- Seltenheit-Feld ist sichtbar und befüllt:
- Krönchen: Königlich
- Brot: Einzelstück
- In den Tooltip-Lore-Zeilen erscheinen „Freunde X“, „Support X“, „Göttin X“ (Krönchen) sowie „Freunde X“, „Support X“, „Laura X“ (Brot).
- Nebenbefund (aus dem Setup, nicht Server-weit sichtbar): Meldungen eines Screenshot-Uploaders (Discord-Webhook) und ReplayMod-Aufnahmeindikator.

### Beispiel-Strings (de_DE)
- Support X — „Deine Nähe stärkt Verbündete und reinigt sie von Übeln.“
- Freunde X — „Gemeinsam schneller, härter, standhafter.“
- Göttin X — „Wenn alles fällt, geschieht manchmal ein Wunder.“
- Laura III — „Zwei Herzen, ein Takt.“
- Royal Guard II — „Der Glanz der Krone wehrt Klingen ab.“
- Bäcker II — „Frisch gebacken heilt am besten.“

### Problem-/Aha-Momente aus dem Chat
- Widerspruchsgefühl: Ein simples Brot als „Einzelstück“ wirkt witzig/absurd → Anlass für „lol?/ähm?“.
- Konsistenzfrage: Wenn behauptet wird, dass Seltenheit nicht relevant/angezeigt sei, konterkariert dies die sichtbare Seltenheit im Tooltip.
- Benennung vs. Mechanik: Die Namen „Support/Freunde/Göttin/Laura“ wecken konkrete Erwartungen, die im Ist-Zustand keine echte Mechanik hinterlegt haben.

### SUPPORT I–X — *Helfende Hand*
- Rolle: Healer/Protector.
- Passiv (Aura): Verbündete im Radius erleiden −1,5 % × Lvl Schaden (Cap 15 %). Radius: 4 + ⌊Lvl/3⌋.
- Rettungs-Ping: Fällt ein Ally < 35 % HP, erhält er Absorption 2♥ + Regeneration II (3 s), pro Ally max 1×/20 s.
- Aktiv (Shift + Rechtsklick): Cleanse – entfernt 1 negativen Effekt (ab V: 2). Cooldown: 30 − Lvl s (min 15 s).
- Warum passend: „Support“ fühlt sich wie Sanitäter + Bodyguard an.

### FREUNDE I–X — *Kameradschaft*
- Rolle: Gruppen-Synergie, belohnt Nähe.
- Nähe-Buff: Wenn ≥1 Freund/Partymitglied ≤ 10 Blöcke: Speed I & Resistance I; pro 3 weitere Freunde +1 Stufe (Cap II).
- Fokus-Debuff: Treffen 2 Freunde denselben Gegner binnen 3 s ⇒ Schwäche I (2 s + 0,2 s × Lvl).
- Beute-Bonus: +0,5 % × Lvl Lootchance bei gemeinsamen Kills.
- Solo-Komfort (optional): +2 % Bewegungsgeschwindigkeit.

### GÖTTIN I–X — *Göttlicher Eingriff*
- Rolle: Miracle/Clutch, „Totem-light“.
- Death-Save: (0,6 % × Lvl) Chance, tödlichen Treffer zu negieren → setze auf 2♥, gib Resistance II + Absorption II (5 s). Shared CD: 300 s.
- Urteil über Untote: Nach 1,5 s Schleichen: nächster Treffer +12 % × Lvl gegen Untote.

### Eigenes Paper-Plugin „DTEnchants“ (Java 17, Paper 1.20+)
- Typen: Aura-Enchant (tickend), Link/Seelenband (Partner-UUID im PDC), Death-Save (priorisierter DamageListener), Consumable-Heal.
- Core-Hooks: EntityDamageEvent (DR/Save/Untoten-Bonus), PlayerInteractEvent (Cleanse/Brot), EntityDeathEvent (Loot-Bonus), 1 Hz-Aura-Task.
- Anti-Stacking: Höchster Level pro Enchant zählt; Death-Save hat shared cooldown.
- Konfig: bevorzugt TOML (Radius/Prozente/CDs).

### Nächste Schritte (Aktionsplan)
Plugin-Entscheidung: AE/Eco (schnell) oder eigenes „DTEnchants“ (flexibel).
Konfig/Code erzeugen: Werte aus §4 übernehmen; Ally-API anbinden.
Testserver: PvE-/PvP-Playtests, Fokus auf CD, Radius, Proc-Chancen.
Finetuning: Caps/Prozente justieren, Texte (de_DE) finalisieren.
Rollout: Staged Release (Event-Playlist, dann dauerhaft mit Drop-Raten).
Feedback: Community-Umfrage, Log-Auswertung, ggf. Hotfixes.

### Kurzfazit
Aus zwei Meme-Tooltips entsteht ein rundes, servertaugliches Enchant-Set. Es respektiert Balance, belohnt Teamplay und bleibt der Lore treu. Damit hast du eine klare Blaupause für Konfig oder eigenes Plugin – plus einen konkreten Plan bis zum Rollout.

### Mögliche Maßnahmen
- Einrichtung von Compliance-Stellen (z. B. „Minecraft Java Compliance Engineer“).
- Aufbau einer Zusatzorganisation oder Community-Beiräte (Slack/Teams), um Open-Source-Mitglieder einzubinden.
- Möglichkeit, dass auch Nicht-Angestellte direkt mit Servern oder Devs sprechen dürfen.

### Offizielle Ausschreibung von Stellen
- Würde in der Community sofort für Aufregung sorgen.
- Kleine Server/Spieler: würden jubeln.
- Große Server/Premium-Devs: Panik, weil sie Kontrolle befürchten.
- Einzelne Bewerber (z. B. ich) würden automatisch viel Aufmerksamkeit bekommen.

### Einleitung
In diesem Gespräch habe ich verschiedene Ideen entwickelt, wie Microsoft oder Mojang ein stärkeres Compliance-System für Minecraft (vor allem Java Edition) aufbauen könnten. Dabei habe ich sowohl meine Gedanken zur Rolle einzelner Entwickler als auch zur Reaktion der Community und möglicher Zukunftsszenarien ausgeführt.

### Fazit
Das Thema zeigt, dass Open Source, Premium-Plugins und die Interessen großer Netzwerke in Minecraft stark kollidieren.
Ein offizielles Compliance-System von Microsoft wäre ein Wendepunkt: Freude bei den Spielern und Open-Source-Devs, Angst und Widerstand bei großen Servern und Premium-Anbietern.
Ich sehe darin eine Möglichkeit, langfristig Fairness, Multi-Version-Support und Transparenz in die Szene zu bringen.

### Zukunftsvisionen und Ideen
- Aufbau einer stabilen, sicheren App-Anbindung mit Multi-Confirm-Flows und Limits.
- Eventgesteuerte, aber schlanke Aktualisierungen im Spiel für eine bessere Spielerfahrung.
- Stärkung der Wirtschaft durch unterschiedliche Welten:
- Normale Spieler auf Citybuild/Farm.
- Fortgeschrittene mit Shops/Marktaktivität.
- Reiche/Techniker mit Redstone-Premiumwelt.
- Idee: Diagramme oder Modelle zur Visualisierung der Geldströme zwischen den Welten.

### Citybuild- und Farmserver
- Citybuilds (z. B. 5 Stück) bilden die Hauptwirtschaft mit Grundstücken, Shops und Märkten.
- Farmserver (z. B. 6 Stück plus 2× Nether, 1× End) liefern Ressourcen.
- Instanzierung (z. B. Farm-A/Farm-B) sorgt für horizontale Skalierung und Lastverteilung.

### Design von Minecraft
- Minecraft ist nicht auf Live-Updates ausgelegt. Scoreboards und GUIs sind Momentaufnahmen, die nur aktualisiert werden, wenn der Server Daten pusht.
- Viele Netzwerke lösen dies mit periodischen Updates (z. B. jede Minute) oder bei bestimmten Events (z. B. Jobabschluss, Geldtransfer).

### Fazit
Das Zusammenspiel von App-Integration, Ingame-Design und Serverlandschaft zeigt, wie ein großes Minecraft-Netzwerk ökonomisch und technisch funktionieren kann.
Die App erweitert Möglichkeiten, darf aber nicht zu „OP“ werden – Sicherheitsmechanismen und Limits sind Pflicht.
Serverlast ist handhabbar, solange man mit Caching, Event-Pushs und asynchroner Architektur arbeitet.
Die Redstone-Welt ist ein gutes Beispiel für Exklusivität, Balancing und Technikfreundlichkeit im großen Maßstab.

### Features und Sicherheit
- Erste Phase: Read-only (Kontostände, Transaktionen einsehen).
- Zweite Phase: Kleine Überweisungen oder Daueraufträge mit Limits.
- Dritte Phase: Gruppen-/Gildenkonten mit Mehrfachbestätigung.
- Sicherheitskonzepte: Limits, Cooldowns, 2-Faktor-Auth, Gerätebindung, Audit-Trails.
- Kontenerstellung in der App ist möglich, sollte aber an Mehrfachbestätigungen (z. B. dreimal bestätigen) gebunden sein, damit Kosten korrekt abgebucht werden.

### Lösungen
- Manuelle Aktualisierung über einen Button oder Befehl (/refresh).
- Periodische Updates mit geringer Last (z. B. jede Minute).
- Eventgesteuerte Updates nur bei betroffenen Spielern, z. B. nach einer Überweisung.
- Kombination aus Polling (regelmäßig) und Event-Pushs (gezielt).

### Normale Last
- Bei 100–200 Spielern pro Server bleiben Scoreboard- und GUI-Updates unkritisch (nur wenige tausend Packets pro Minute).
- Wirtschaftlich intensive Aktionen (Jobs, Überweisungen) erzeugen zusätzliche Events, aber in einem beherrschbaren Rahmen.

### Peak-Szenarien
- Bei Netzwerk-Events mit 5–6 vollen Lobbys à 150 Spieler kann es zu spürbarer Last kommen.
- Engpässe entstehen oft nicht bei den Paketen selbst, sondern durch Datenbank-Abfragen oder Plugins, die synchron arbeiten.
- Lösung: Async-Queries, Caching, Delta-Updates statt Full-Updates.

### Verlinkung
- Eine App könnte mit dem Minecraft-Konto verknüpft werden, um Bank- und Markt-Funktionen verfügbar zu machen.
- Ohne Verlinkung gäbe es keinerlei Zugriff auf Daten, Funktionen oder Konten.
- Der Verlinkungsprozess sollte über Ingame-Codes/QR und zusätzliche Sicherheitsstufen (z. B. Passkeys, TOTP) erfolgen.

### Wirtschaftliches Balancing
- Farmwelten: Geldquelle (Ressourcen generieren).
- Citybuilds: Geldumverteilung (Shops, Handel).
- Redstone-Welt: Geldsenke (teure Anschaffungen, Prestige).
- Lobby: neutral (kein Geldsystem).

### Usage Guidelines
- Ergänzende, praxisnahe Erläuterungen zur EULA.
- Legen in verständlicher Sprache fest, wie Branding, Namen und Inhalte verwendet werden dürfen.
- Regeln Monetarisierung auf Servern: z. B. Spenden erlaubt, Pay2Win verboten, kosmetische Items erlaubt.
- Kein rechtlich bindendes Dokument, sondern eine „praktische Auslegung“ der EULA.

Gedanke: Mod-Teams verlinken oft die Guidelines statt der EULA, weil sie leichter verständlich sind und nicht so „juristisch abschreckend“ wirken.

### Grundidee und Ausgangspunkt
- Thema dreht sich um den Aufbau eines Clans in Minecraft, insbesondere auf Servern wie OpSucht.
- Fokus: Clanbildung mit Jugendlichen (14+), eventuell auch jüngeren Spielern in kontrollierter Probemitgliedschaft.
- Ziel: Clan zu etablieren, der sowohl wirtschaftlich stark als auch gemeinschaftlich stabil ist.

### Clan-Aufbau und Mitglieder
- Startvision: etwa 50 Stammspieler mit einer Clan-Mitgliedergrenze von 100.
- Jugendliche aus Europa, mit ähnlichen Zeitzonen, um die Aktivität zu koordinieren.
- Fans könnten den Clan sogar selbstständig gründen, mit mir als zentrale Figur im Hintergrund.
- Verifizierung des Clans beim Server-Team wäre wichtig, um Anerkennung und Schutz zu sichern.

### Server sauber stoppen
screen -S mc -X stuff "say [Reset] Server wird neu gestartet...\nstop\n"
sleep 10

WORLD="world_farm"
BASE="/srv/mc/server"
cd "$BASE"
DATE="$(date +%F)"

### Ausgangspunkt
- In vielen Minecraft-Communities wird das „Ende der Welt“ (Worldborder) als natürliche Grenze verstanden.
- Normale Spieler können die Grenze regulär nicht überschreiten; frühere Glitches (Enderperle, Elytra-Boost, Teleport-/Chunk-Bugs) sind in aktuellen Server-Stacks oft gepatcht, aber nicht immer konsequent konfiguriert.
- Farmwelten werden häufig wöchentlich resettet (z. B. Farbenwelt). Dabei wird meist nur die Welt-Map ausgetauscht, nicht jedoch sämtliche Meta-/Server-Settings oder Container-Daten.

### Kernthema
- Spieler schaffen es teils hinter die Worldborder (oder in außerhalb berücksichtigte Bereiche) zu gelangen und dort Basen mit Kisten anzulegen.
- Nach Welt-Resets bleiben Container/Items aufgrund separater Speicherung persistiert → „Unendlichkeitstrick“ (Waren/Geldzufluss ohne erneutes Farmen).
- In Farmwelten ohne Ownership/Claims wirken diese Kisten „herrenlos“ und sind schwerer zu detektieren als auf Citybuild/Plots.

### Mini‑Glossar
- Worldborder: Serverseitige Weltgrenze.
- TileEntity/Container: Spezielle Blockdaten (z. B. Kisten, Fässer, Shulker).
- Farmwelt: Temporäre Sammelwelt ohne Claims/Ownership.
- Citybuild/Plots: Persistente Bauwelt mit Besitzzuordnung.

### Farmwelt ohne Ownership
- In Farmwelten sind Claims/Ownership meist deaktiviert → keine eindeutige Zuordnung von Kisten zu Spielern.
- Tools, die auf Citybuild gut greifen (PlotSquared, GriefPrevention, CoreProtect-Abfragen nach Besitzern), liefern hier keine oder zu schwache Indikatoren.

### Harte Löschung von Persistenzpfaden der Farmwelt
rm -rf "${WORLD}/region" "${WORLD}/poi" "${WORLD}/entities"

### Tarnung & Entdeckung
- Basen außerhalb der Border sind für normale Spieler praktisch unsichtbar.
- Karten/Render-Plugins zeigen diese Randzonen teils nicht; Logs fehlen oder werden nicht lang genug aufbewahrt.

### Rollen & „Scripted Reality“
- Duo-Dynamik (z. B. Will + Kollegin):
- Einer spielt die chaotische Rolle (z. B. Entbannung berüchtigter Spieler trotz Warnung),
- der/die andere die vernünftige/warnende Rolle.
- Serienlogik: Bann → Entbannung → erneuter Vorfall → Video/Clips → Reichweite.
- Ergebnis: „Kontrolliertes Chaos“ als Marketing — solange ökonomischer Schaden kalkulierbar bleibt.

### Was daran interessant ist
- Die Schnittstelle aus Technik (Border/Container/Resets) und Content-Strategie (Drama, Pranks, Serien) erklärt, warum manches „offen“ bleibt.
- Spannend: technisch triviale Fixes vs. bewusster Verzicht zugunsten von Reichweite.

### Was ich ggf. umsetzen möchte
- Harte technische Schließung aller Persistenzpfade (siehe Maßnahmenplan).
- Transparente Kommunikation: Changelogs, Anti-Exploit-Policy, faire Kompensation legitimer Spieler.
- Optional: „Sichere Content‑Spielwiese“ (separate Testwelt, kontrollierte Szenarien), um Sichtbarkeit zu behalten ohne Live‑Ökonomie zu gefährden.

### Zukunftsplanung
- Standard-Reset-Pipeline aufbauen (Script/CI), die Border, Container & Economy sauber trennt.
- Monitoring & Auditing als Daueraufgabe (Alerts bei Containerplatzierung außerhalb Border).
- Policy-Framework für Banns/Entbanns, damit Entertainment nicht die Serverintegrität aushebelt.

### Border & Chunk-Ebene
- Strikte Enforcement: WorldBorder/ChunkyBorder/Purpur so einstellen, dass jenseits der Border weder Chunks geladen noch Blöcke platziert werden.
- Auto‑Teleport/Kill für Spieler außerhalb der Border.

### Reset ohne Persistenzreste
- Vor Reset hart löschen (Farmwelt): region/, poi/, entities/, Container-/TileEntity-Daten, ggf. playerdata/ (wenn Farmwelt‑inventarisiert).
- Fill/Pre‑gen bis Border nach Neuanlage, um Nachladelücken zu vermeiden.

### Logging & Detektion
- CoreProtect/Prism auch in Farmwelt aktivieren (mit Retentionsstrategie).
- Alerts: Jede Container‑Platzierung >Border → Log + Mod‑Ping.

### Economy‑Isolierung
- Farmwelt‑Einnahmen nicht 1:1 auf Haupt‑Economy durchreichen (separate Währungen / Limits / Abgaben).
- Optional: Inventar/Enderchest‑Reset synchron zum Farmwelt‑Reset.

### Server starten
./start.sh
`

Hinweis: Die tatsächlichen Pfade/Dateinamen für Container-/TileEntity‑Daten hängen vom Server‑Fork/Plugins ab. Das obige ist ein Blueprint – vor Live‑Betrieb auf Staging testen.

### Sofort (24 h)
- Border‑Enforcement aktivieren/prüfen.
- Alert bei Container >Border.
- Economy‑Brücke Farmwelt→Hauptwelt temporär begrenzen.

### Kurzfristig (1–2 Wochen)
- Reset‑Script erstellen (siehe Anhang) mit Purge aller Persistenzpfade.
- CoreProtect‑Retention für Farmwelt definieren.
- Post‑Reset‑Checks automatisieren (Health‑Report).

### Mittelfristig
- „Sichere Content‑Spielwiese“ (separate Welt) für Show‑Formate.
- Policy & Changelogs öffentlich pflegen.

### Minecraft: Farmwelt-Exploits, Worldborder & Content-Dynamik — Gesamtdokumentation
Stand: 2025-09-16
Ziel: Wiederverwendbare, gut gegliederte Zusammenfassung inkl. Ideen, Maßnahmenplan und Zukunftsoptionen.

### Optional/abhängig vom Setup:
rm -rf "${WORLD}/playerdata" "${WORLD}/data/containerdata" 2>/dev/null || true

### Events und Rollenspiel
- NoRisk + Veto/NQRMAN: Hochzeit auf einem Server mit „Pfarrer“ als Gag.
- Generell beliebt: absurde Rollenspiele in Minecraft (Gerichte, Beerdigungen, Reality-Shows).

### Unterschiede bei Generationen
- Junge Spieler (15 J.) kennen meist nur Discord, TS gilt für sie als „alt“ oder sogar „für Babys“.
- Ältere Communities und große Netzwerke wie OPSucht nutzen TS immer noch (z. B. für Teamsitzungen), wegen Struktur, Qualität und Kontrolle.

### Beobachtung
- NoRisk-Client bietet anscheinend eine Art eingebauten VPN/Relay-Service wie Hamachi.
- Damit kann man lokal mit Freunden spielen, ohne Ports freizugeben.

### Funktionsweise
- Entweder via virtuellem LAN (VPN) oder über Relay-Server, die von NoRisk betrieben werden.
- Vorteil: Einfachheit für Nutzer.
- Nachteil: Abhängigkeit von deren Infrastruktur, mögliche Latenzen.

### Eigene Idee
- Solches System könnte auch als freie Lösung entwickelt werden (self-hosted VPN-light), um Abhängigkeiten von Dritten zu vermeiden.

### Clan- und Server-Strukturen
- Historische Betrachtung der alten Clans (TGA, AOD, Salzarmee), die früher sehr elitär und nur schwer verifiziert waren.
- Heute deutlich offeneres System mit Richtlinien, was zu einer Lockerung der Clanverifizierungen führte.
- Clans wie AOD haben riesige Bauwerke geschaffen (z. B. „Atlantis“) mit Millionen von Blöcken (Quarz, Wasser, etc.).
- Diskussion darüber, wie die alten Clanleiter heute wahrgenommen würden, wenn man sie öffentlich begrüßt oder erwähnt.
- Interesse an der Clanverwaltung, die Ingame sehr komplex ist und nicht alle Möglichkeiten einer externen Web-App hat.

### Überblick in Kürze
- Kernthese: Minecraft ist in den letzten Jahren modularer geworden (Datapacks, JSON-basierte Systeme, API‑Hooks). Das erleichtert Mojang/Microsoft kleine, häufige Releases – verlagert aber Anpassungsaufwand auf Server-Admins und Mod-/Plugin-Entwickler.
- Konfliktfeld: Bedrock erhält Zwangsupdates über Konsolen/App-Stores und nutzt abweichende Versionsschemata (z. B. 1.21.100 statt 1.21.1). Community‑Server (oft Java‑basiert) brauchen Zeit für Protokoll‑/API‑Updates → spürbare Verzögerungen.
- Dein Fokus: Verständnis der Architektur-Entwicklung (früher vs. heute), Realitäten für Serverbetrieb (Proxy/Version-Bridge), sowie kreative Nutzung von Dimensionen (Datapacks/Mods) und kuriosen Challenges.

### Kurz‑Glossar
- Datapack: Paket mit JSON‑Definitionen (Rezepte, Loot, Biome, Dimensionen) – Vanilla‑tauglich.
- Geyser/Floodgate: Bedrock↔Java‑Proxy, erlaubt Bedrock‑Clients auf Java‑Servern.
- ViaVersion/ViaBackwards: Protokoll‑Brücken zwischen Java‑Versionen.
- Multiverse: Plugin‑Familie für mehrere Welten auf einem Server.
- Snapshot/Pre‑Release: Vorab‑Builds für Tests.

### Übergang (1.7–1.12)
- Stabilere Forge‑Registries, Bukkit/Spigot mit Event‑APIs; Server-Plugins (z. B. Multiverse) ermöglichten zusätzliche Weltordner (Skyblock, Freebuild, Minigames) – technisch nicht „echte“ neue Dimensionen, aber praktikabel.
- Erste JSON‑Konfigurationen (Rezepte, Loot‑Tables) erleichtern Mod‑Kompatibilität.

### Frühe Ära: „Große Brocken“
- Major‑Updates bündelten die Highlights (1.8, 1.9, 1.13). Wartung/Portierung planbarer, aber große Sprünge.

### Typische Update-Ketten
Mojang released neue Java/Bedrock‑Version.
Server‑Stacks (Spigot/Paper/Bungee/Velocity) passen API/Protokolle an.
Proxy‑/Bridge‑Projekte (Geyser/Floodgate, ViaVersion/ViaBackwards) aktualisieren Mappings.
Plugins/Mods werden portiert, Server‑Admins testen/rollen aus.

### Praxisprobleme
- Version‑Lag: Live‑Spieler auf Bedrock sind sofort auf neuer Version; Server brauchen Tage/Wochen.
- API‑Brüche: Minor‑Releases enthalten Feature‑/Protokolländerungen → häufiger Portierungsaufwand.
- Community‑Spaltung: LTS‑Server (z. B. 1.12.2, 1.16.5, 1.20.x) vs. „immer neueste“.

### Workarounds
- Version‑Bridges: ViaVersion/ViaBackwards (Java↔Java), Geyser (Bedrock↔Java).
- Staging/Testserver: neue Version parallel evaluieren, Hauptserver bleibt stabil.
- Langzeitstrategie: gezielt LTS‑Zweige pflegen, nicht jeder Minor hinterherhecheln.

### Nummerierung
- Java: 1.Major.Minor → z. B. 1.21.1.
- Bedrock: 1.Major.Build.Revision → z. B. 1.21.100, 1.21.101 …; „100er‑Schritte“ markieren Content‑Wellen.
- Folge: Inhaltlich parallele Updates wirken numerisch verschieden.

### Release-Kanäle
- Bedrock (Konsole/Mobile/Store): Zwangsupdates, kaum Downgrade‑Option → Casual‑Spieler immer „up to date“.
- Java (Launcher): freiere Versionwahl, Snapshots wählbar.

### Spannungsfeld
- Bedrock‑Spieler fragen „Warum unterstützt euer Server nicht sofort 1.21.100?“
- Realität: Proxy‑/Protokoll‑Mappen ist komplex; Server‑Stacks und Plugins brauchen Zeit.

### Community‑Trends: Kuriose Herausforderungen & Mods
- Skyblock (Minimal‑Survival), Speedrunning (RSG/MCSR), Crystal PvP.
- Beliebte Dimension‑/Abenteuer‑Mods: Aether, Twilight Forest; Horror‑Erlebnisse (z. B. Parasites/Grue/Whisperwoods).
- Server‑seitig: Multiverse‑Szenarien (mehrere Overworlds/Nether/End), absurde Regeln (Random‑Swaps, Exploding Mobs, Gravity‑Flips) – ideal via Datapack/Plugin.

### Gedanken/Standpunkte (extrahiert)
- Modularisierung ist zweischneidig: technisch sinnvoll, aber verschiebt Aufwand zur Community.
- Zwischenversionen mit Features (z. B. 1.21.x) erschweren stabilen Serverbetrieb.
- Bedrock‑Zwangsupdates kollidieren mit Community‑Server‑Zyklen; Nummerierung verwirrt Nutzer.

### Was dich interessiert
- Unendlich viele Welten/Ideen durch Custom‑Dimensionen (Datapacks/Mods).
- Historische Technik (wie wurde das vor 10+ Jahren gemacht? → Forge/ModLoader/IDs/Teleporter).
- Skurrile Server‑Challenges (Gravity/Random/Exploding‑Mobs).
- Transparente Kommunikation an Spieler (Java↔Bedrock‑Mapping, warum Server „hinterherhinkt“).

### Konkrete Umsetzungsideen
Parallel‑Overworld per Datapack
- Eigene Ressourcen‑Verteilung je Dimension (Erze/Wasser/Stein‑Only).
- Portale/Kompass/Commands als Zugang.
Server‑Stack mit Brücken‑Strategie
- Paper + Velocity/Bungee, ViaVersion/ViaBackwards für Java‑Kompat, Geyser/Floodgate für Bedrock‑Spieler.
- Zwei‑Stufen‑Rollout: Test‑Instance (Snapshots/Minors) → Stable‑Instance.
Version‑Policy dokumentieren
- Interne „SLA“: z. B. „Minor‑Updates innerhalb 7–14 Tagen, wenn Kern‑Plugins kompatibel sind“.
- Öffentliche Mapping‑Tabelle (Java 1.21.1 ≈ Bedrock 1.21.100 inhaltlich) + Status‑Page.
Challenge‑Rotation
- Wöchentliche Datapack‑Challenges (Gravity Flip, Random Drops, Exploding Mobs) als Events; Belohnungen kosmetisch halten.

### Nächste Schritte (Roadmap‑Vorschlag)
- A) Mini‑Datapack „Parallel‑Overworld“ prototypen (Seed, Biome‑Filter, Generator‑Settings).
- B) Test‑Proxy aufsetzen (Velocity + Geyser) und Update‑Playbook schreiben (Wer macht was, wann?).
- C) Status‑/Info‑Seite für Spieler: aktuelle unterstützte Java/Bedrock‑Builds, Downtime‑Fenster, bekannte Probleme.
- D) „Feature‑Freeze“ definieren: kurz vor erwarteten Mojang‑Releases keine riskanten Server‑Änderungen.
- E) Community‑Umfragen zu Challenge‑Formaten (monatlich wechselnd).

### Offene Punkte & Risiken
- Timing‑Risiko: Minor‑Update + Proxy‑Lag → kurzfristige Unerreichbarkeit für Bedrock‑Spieler.
- Kompat‑Risiko: Einzelnes Kern‑Plugin ohne Update blockiert den gesamten Rollout.
- Kommunikations‑Risiko: Nummerierungs‑Verwirrung → Frust bei Spielern ohne Hintergrundwissen.

### Ausgangsfrage: Bedrock als Testplattform?
- Beobachtung: Es scheint so, dass Microsoft/Mojang neue Funktionen zunächst in der Bedrock Edition testet oder sogar exklusiv einführt.
- Beispiele:
- Vibrant Visuals (Lichteffekte, Schatten, Nebel) wurden zuerst in Bedrock veröffentlicht.
- Copper Golem & Kupfer-Features kamen zuerst in die Bedrock Preview-App, während Java später nachzieht.
- Vermutung: Bedrock dient durch die „Preview“-Struktur als einfachere Testumgebung mit mehr Plattformvielfalt.

### Haltung gegenüber der Community
- Mojang will die Java-Modding-Community nicht vergraulen.
- Modifikationen gelten eher als kreative Fan-Umsetzungen und stärken das Ökosystem.
- Reaktionen erfolgen nur, wenn:
- Assets 1:1 aus Bedrock extrahiert werden.
- Mods den Eindruck erwecken, „offiziell“ oder geleakt zu sein.
- Falsche Erwartungen auf Servern geweckt werden („Das ist schon 1.22!“).

### Zukunftsbetrachtung und eigene Ideen
- Es ist zu erwarten, dass Bedrock weiterhin als Testfeld für neue Funktionen dient.
- Java wird durch Community-Mods praktisch automatisch „parallel erweitert“.
- Spannend ist, wie sich dieser Trend entwickelt:
- Wird Java zukünftig immer langsamer die Features übernehmen?
- Oder werden Community-Mods so stark, dass Mojang die Ideen sogar schneller aufgreift?

### Fazit
Die aktuelle Strategie von Microsoft/Mojang legt nahe, dass Bedrock die Vorreiterrolle für neue Funktionen übernimmt.
Für die Java Edition spielt die Community eine entscheidende Rolle, da Mods viele Funktionen vorwegnehmen und so den Hype verstärken.
Offizielle Sanktionen sind kaum zu erwarten, solange keine direkten Bedrock-Assets kopiert werden.
Damit bleibt die Java-Community ein wichtiger Innovationsmotor, während Bedrock für Microsoft der technische Testplatz bleibt.

### b) Fokus auf Java Edition (wichtigster Punkt des Nutzers)
- Community-Mods sind üblich und akzeptiert.
- Mojang würde nicht hart durchgreifen, solange keine offiziellen Bedrock-Assets kopiert werden.
- Beispiele aus der Vergangenheit:
- Copper Golem nach Mob-Vote-Niederlage → viele Java-Mods, Mojang tolerierte das.
- Armadillo → schon vor Snapshots in Mods vorhanden, ohne Probleme.
- Microsoft/Mojang profitieren indirekt vom Hype, weil Mods die Spielerbasis aktiv halten.

### Klassisch
- Hauptmaterial: Steinziegel oder Ziegel
- Akzente: Holzdetails, Quarzrahmen
- Dach: Ziegel- oder Tiefenschiefer-Treppen

### Mediterran
- Hauptmaterial: Gefärbte Terrakotta (warm, orange/rot/beige)
- Akzente: Ziegel, helle Steinvarianten
- Dach: Orange Terrakotta oder Kupfer

### Terrakotta und Ton
- Ton (Clay): Neutraler Block, beim Brennen zu Terrakotta.
- Terrakotta: In Naturfarben oder eingefärbt erhältlich. Wirkt weniger grell als Beton, ideal für warme oder mediterrane Bauten.
- Glasierte Terrakotta: Bunte Muster, perfekt für Böden oder Mosaik-Wände.
- Abgrenzung zu „Mud“ (Schlamm): Mud ergibt gepackten Schlamm, nicht Terrakotta.

### Ausgangspunkt: OPSucht-Event „Community Grief“
- Beobachtungen beim Event: starke Lags, viele Spieler flogen vom Server, Maschinen liefen am Limit.
- Technische Hintergründe: Die Lobby wurde per WorldEdit auf die CityBuilds kopiert, wodurch die Last auf produktiven Servern lag.
- Marcel (Masel/ByteException) musste live htop überwachen und Slots schrittweise erhöhen, während Phil gleichzeitig live streamte.
- Spielerzahlen explodierten, vermutlich neuer Rekord → Minecraft geriet klar an Engine-Grenzen (Single-Core-Last).

### Idee: Minecraft Neo
- Vision einer neuen Engine (Neo), die vollständig Multi-Core-/SMT-fähig ist.
- Region-basiertes Ticking, Async-Redstone, Entities parallel.
- Alte Welten, Clients und Plugins bleiben kompatibel.
- Einstieg als paralleles Projekt → langfristig soll Neo „das neue Minecraft“ werden, der Name verschwindet.

### Job-System auf OPSUCHT
- Beispiel: Miner-Job.
- Levelaufstieg von 14 → 15 bringt den Booster „Schneller Abbauen +60 %“.
- Unterschied Booster vs. Perk:
- Perks: dauerhafte Vorteile (z. B. höherer Lohn, neue Drops).
- Booster: temporäre Belohnungen, die eingelöst werden müssen.
- Eigene Erkenntnis: Leveln bringt also beides – langfristige Progression (Perks) und kurzfristige Extras (Booster).

### Eigene Server
- Bieten volle Freiheit bei der Wahl der Version.
- Mods und Plugins können flexibel integriert werden.
- Nachteil: Pflege und technisches Wissen erforderlich.

### Fehlende Mittel-Lösung
- Mojang bietet keine Realms-Variante, bei der man die Version fixieren kann.
- Eine Art „Realms Classic“ oder „Mod-freundlicher Realm“ wäre eine Lösung, existiert aber nicht.

### Minecraft Forum
- Schon seit 2013 gibt es Forderungen nach Mod-Support oder mehr Version-Kontrolle in Realms.

### Forge Forum
- Einzelne Nutzer berichten, dass bestimmte Forge-Versionen „zufällig“ mit Realms funktionieren.
- Das sind aber Workarounds, kein offizieller Support.

### Relevanz für Gelegenheitsspieler
- Gerade Spieler, die nur einfache Mods nutzen möchten, leiden unter der fehlenden Versionskontrolle.
- Diese Gruppe kann oder will keinen Server hosten und bleibt ohne Mods zurück.

### Mögliche Ideen für die Zukunft
- Wunsch nach einem optional version-locked Realm.
- Eventuell eine Art Hybrid-Lösung: einfache Bedienung wie Realms, aber Version frei wählbar.
- Diskussionen in Foren zeigen, dass es Community-Bedarf gibt, Mojang hat bisher aber nicht reagiert.

### Fazit
Die Diskussion zeigt, dass Realms ein sehr bequemes Angebot für Casual-Spieler sind,
gleichzeitig aber Mod-Nutzer stark einschränken.
Die fehlende Möglichkeit, Versionen zu fixieren, sorgt dafür, dass Mods – selbst einfache Komfortfunktionen –
immer wieder unbrauchbar werden.
Community-Stimmen belegen, dass dieses Problem seit Jahren bekannt ist, ohne dass Mojang bisher
eine Lösung wie „Realms Classic“ oder version-locking eingeführt hätte.

Datei erstellt am: 2025-09-16

### Überblick & Ziel
Diese Notizen fassen die zugrunde liegende Darstellung zu „inkompatiblen“ Ressourcen-/Texturpaketen in Minecraft zusammen – inkl. Beobachtungen im Spiel, Ursachen in pack.mcmeta, Besonderheiten der pack_format-Werte (inkl. Snapshots/Pre‑Releases), konkreten Beispielen (z. B. Sandy Dunes, Animated Rainbow XP Bar) sowie praktikablen Lösungen und einer kleinen Roadmap. Fokus: Minecraft 1.21.x, konkret Server/Client 1.21.4.

### Minimales Mapping (Kernauszug aus unserer Diskussion)
Achtung: Resource‑ vs. Datapack‑Linien sind verschieden; unten steht bewusst der Fokus auf Ressourcenpacks für dein Setup, ergänzt um die „auffälligen“ Zahlen.
- Ressourcenpacks
- 1.20.5 (Pre‑Release‑Kontext): 32
- 1.21 / 1.21.1 (Release‑Kontext): 34
- 1.21.0 Pre 1–4: 46
- 1.21.4 (dein Server/Client): 46
- 1.21.5 (Release‑Kontext): 55
- Snapshot 25w20a (Entwicklungszweig): 61 (führt im Release‑Client zu „zu neu“)
- Datapacks (nur zur Abgrenzung, häufige Verwechslung)
- 1.21.4: 61 (Datapack‑Linie; darf nicht in Ressourcenpacks verwendet werden)
- Weitere Snapshot‑Zwischenstände möglich (daher wirken Zahlen „kurios“).

### Block & Quill Ltd
- Um die neue Plattform rechtlich und organisatorisch abzusichern, wurde die Firma Block & Quill Ltd gegründet.
- Sitz: 128 City Road, London, UK – eine typische Geschäftsadresse, wie sie viele Firmen in Großbritannien nutzen (Registered Office).
- Aufgabe: Domainverwaltung, Serverfinanzierung, rechtliche Absicherung.
- Die Inhalte bleiben aber weiterhin community-getrieben.

### DNS vs. Proxy bei Minecraft
- Diskussion: Viele versuchen Minecraft-Server über Traefik oder andere Reverse-Proxies verfügbar zu machen.
- Feststellung: Das ist unnötig, da Minecraft kein HTTP/TLS spricht.
- Lösung: Nutzung von DNS (A/AAAA-Records oder SRV-Records) statt Proxy.
- Für Java: SRV funktioniert zuverlässig. Für Bedrock: eingeschränkte Unterstützung, speziell bei Konsolen.
- Fazit: Proxy ist Ballast, DNS ist die eigentliche Lösung.

### Sicherheit und MITM in Minecraft
- Interessant: Minecraft nutzt kein TLS, was aus moderner Sicht ungewöhnlich ist.
- Das macht Man-in-the-Middle (MITM) technisch möglich: Traffic kann abgehört und manipuliert werden.
- Einschränkung: Session-Auth gegen Mojang/Microsoft-Server macht Account-Klau schwer, Sniffing aber möglich.
- Gründe für fehlendes TLS:
- Historische Kompatibilität,
- externe Authentifizierung,
- Performance-Überlegungen,
- Community-Proxies, die TLS sowieso aufbrechen würden.

### Ideen für ein All-in-One-Tool
- Diskussion über eine Axt/Spitzhacke, die alles kann (Holz, Stein, Erde, Kampf).
- Problem: Bildlich sähe es seltsam aus, wenn man mit einer Axt schaufelt.

### Visuelle Experimente (Bilderzeugung)
- Erste Darstellungen: Hybrid-Tools mit Regenbogenschimmer auf Diamant-/Netherite-Köpfen.
- Später: Axt als Hauptkopf, daneben Schaufel, Hacke und Spitzhacke nur als Aufsätze.
- Erweiterung: Darstellung mit Werkzeughalterung (Rack), wo die Aufsätze hängen.
- Final: Griff wurde mit bunten Moos-Akzenten versehen, um einen natürlicheren, leicht verwitterten Look zu schaffen.

### Beispiel Allay-Set
- Allay-Schuhe: Explosionsschutz VII, Wasserläufer III, Federfall III, Feuerschutz VII, Schutz X, Seelenläufer III, Haltbarkeit VIII.
- Allay-Helm: Wasseraffinität, Explosionsschutz VII, Feuerschutz VII, Schutz X, Atmung III, Haltbarkeit VIII.
- Allay-Brust: Explosionsschutz VII, Feuerschutz VII, Schutz X, Haltbarkeit VIII.
- Allay-Hose: Explosionsschutz VII, Feuerschutz VII, Schutz X, Huschen III, Haltbarkeit VIII.
- Kombination ergibt ein extrem agiles, vielseitiges Allround-Set.

### Ausgangspunkt – Die Job Booster Woche
Thomas nahm die von OPSucht angekündigte „Job Booster Woche“ als Anlass, seine Aktivitäten gezielt nach den tagesabhängigen Boosts zu planen. Jeden Tag ist ein anderer Job mit einem Bonus versehen. Schnell wurde klar, dass sich für ihn die Tage Freitag (Gräber), Samstag (Holzfäller) und Sonntag (Minenarbeiter) als Haupttage eignen, da sie seinen stärksten Jobs entsprechen.

Unter der Woche (Builder, Fischer, Jäger, Farmer) erkannte er zwar das Potenzial bestimmter Berufe, sah aber zugleich deren begrenzte Effizienz – insbesondere beim Builder, der sich eher für kreative Bauleute eignet als für Spieler mit Fokus auf Einkommen und Ressourcengewinn.

### Farmwelt und Materialbewertung
Während seiner Vorbereitung entdeckte Thomas in der Farmwelt eine Zone mit rotem Sand und Terrakotta – ein günstiger Random-Spawn, der sich als „Mini-Jackpot“ erwies. Roter Sand zählt beim Gräberjob, während Terrakotta zusätzlich als wertvolles Baumaterial gesammelt werden kann.
Er erkannte den ökonomischen Vorteil, da sich hier gleich zwei Nutzen überschneiden: Geldgewinn durch den Job und langfristiger Materialwert für Projekte oder Handel.

Parallel dazu stellte er fest, dass Stöcke in der Wüste das nutzloseste Nebenprodukt sind – sie verstopfen Inventare, haben aber noch minimalen Nutzen als Brennstoff oder Notfallmaterial für Fackeln. Diese nüchterne Analyse zeigt, wie Thomas zwischen Ressourcenwert, Spielökonomie und Nutzenabwägung unterscheidet.

### Fazit
Thomas hat seine OPSucht-Aktivitäten auf maximale Synergie ausgelegt. Mit Gräber-, Holzfäller- und Minenarbeiter-Jobs bildet er ein stabiles Fundament, das sowohl Einkommen als auch Materialien liefert. Die Farmwelt-Entdeckung mit rotem Sand und Keramik stärkt diese Strategie zusätzlich.

Er verfolgt damit einen strukturierten, nachhaltigen Spielstil, der Effizienz, Spaß und Planung vereint – ganz im Sinne eines Spielers, der seine Umgebung versteht und optimal nutzt.

### Überblick
Der Chat drehte sich um die strategische Nutzung der „Job Booster Woche“ auf dem Minecraft-Server OPSucht. Thomas analysierte dabei gezielt, welche Jobs sich unter bestimmten Boosts am meisten lohnen und welche eher Zeitverschwendung darstellen. Besonders im Fokus standen die Gräber-, Holzfäller- und Minenarbeiter-Jobs, da sie seinem natürlichen Spielverhalten entsprechen und die besten Erträge liefern. Neben der taktischen Planung ging es auch um Nebenfaktoren wie Farmwelt-Spawnbedingungen, Materialwert und Effizienz beim Ressourcenabbau.

### Alternative Wege zur Kritik
- Statt im Discord zu posten: außerhalb Kritik veröffentlichen.
- Vorteile: Keine Löschrechte seitens OPSucht, volle Kontrolle über den Inhalt.
- Mögliche Kanäle:
- Eigener Blog (selbstgehostet oder Plattform wie Write.as, WordPress).
- Soziale Medien (Twitter/X, Mastodon, Reddit, YouTube).
- Gaming-Foren oder Subreddits.
- Wichtig: Sachlich formulieren, keine Beleidigungen oder falschen Fakten, um glaubwürdig und unangreifbar zu bleiben.

### Reaktionen im öffentlichen Chat
- Teammitglieder würden solche Aussagen vermutlich als Provokation oder Drohung werten.
- Andere Spieler könnten das teils unterstützen, teils ablehnen.
- Risiko: Verwarnungen, Mutes oder sogar Bans für denjenigen, der solche Vorschläge öffentlich macht.
- Gelöschte Nachrichten erzeugen schnell den Vorwurf von „Zensur“ und können extern ein PR-Problem für OPSucht darstellen.

### Rolle der Ränge und Investitionen
- Der Spieler hatte Supreme, den zweitteuersten Rang im Shop (ca. 99 €).
- Dieser hohe finanzielle Einsatz verstärkt die Enttäuschung.
- Auch die zugrunde liegende Perspektive selbst erwähnte, dass er Platin mit Kristallen vergünstigt gekauft hat – die Preisspannen sind sichtbar hoch.
- Daraus entsteht das Gefühl, dass die investierte Zeit und das Geld nicht ausreichend gewürdigt werden.

### Umgang mit Rückforderungen
- Möglichkeit: Rückbuchung über Tibex oder direkte Anfrage beim Anbieter.
- Problem: Digitale Güter sind oft vom Widerrufsrecht ausgenommen, sobald sie freigeschaltet wurden.
- Dennoch: Tibex könnte Aufwand erzeugen, da OPSucht dann reagieren und Belege liefern muss.
- Auch wenn eine Rückforderung scheitert, entsteht zusätzliche Arbeit für das Team, was für den Frustspieler eine Form von Druck sein könnte.

### Zukunftsplanungen & Ideen
- Eigene Erfahrungsberichte als Blog oder Artikel verfassen.
- Eventuell ein Gerüst vorbereiten, um Kritikpunkte klar zu strukturieren:
- Was ist passiert?
- Wie hat der Support reagiert?
- Warum ist das frustrierend?
- Welche Verbesserungen wären denkbar?
- Langfristig: Eigene Plattformen nutzen, um Transparenz herzustellen und Diskussionen zu ermöglichen.
- Dadurch kann man sowohl für sich selbst die Erlebnisse dokumentieren als auch andere Spieler informieren.

Fazit:
Die Situation zeigt, dass es riskant ist, Frust direkt im OPSucht-Discord zu äußern.
Sinnvoller ist es, Kritik auf unabhängigen Plattformen zu veröffentlichen, wo keine Zensur stattfinden kann.
Dadurch wird die Stimme des Spielers langfristig gehört, ohne sofort mit Sanktionen rechnen zu müssen.

### Grundsituation
- OPSMP wird durch OPSucht gestützt, eine Firma mit Angestellten, Shop-System (Verkäufe von Rängen) und professioneller Struktur.
- Sie suchen nach Experten und kreativen Köpfen, auch gegen Bezahlung, um die Zukunft des Servers mitzugestalten.
- Mein eigenes Profil:
- Ich habe keine klassische Berufserfahrung, aber viele Ideen und Konzepte.
- Ich möchte meine Arbeiten unter freier Lizenz (CC-BY-SA) veröffentlichen.
- Ich würde Arbeitszeit vergütet haben wollen, nicht aber Exklusivrechte an meinen Ideen abtreten.

### Transparenz
- Ich habe den Anspruch, Gespräche und Ergebnisse öffentlich zu dokumentieren.
- Das passt nicht zu klassischen Firmen, die Verschwiegenheit erwarten.
- NDA (Geheimhaltungsvertrag) noch vor dem ersten Gespräch wäre für mich ein No-Go und wirkt abschreckend.
- Trotzdem: Viele Firmen setzen stillschweigend voraus, dass Bewerber nichts veröffentlichen.

### Überblick
Diese Doku fasst die zugrunde liegende Darstellung rund um OPSucht (Farmwelten, Jobs, Events), Tool‑Setups (Bohrer, Schaufeln, Shulker‑Pakete), TNT-Kugeln via WorldEdit, Support/Chat‑Etikette sowie Discord‑Leveling zusammen.
Fokus: praktische Geld‑/Ressourcenstrategien, sinnvolle Ausrüstung, Bundle‑Logistik und nächste Schritte zum Bohrer‑Ziel.

### Snippet‑Sammlung (copy/paste)
- Leih‑Bohrer: Leiher V3-Bohrer für 30–60 min gesucht. Kaution 200k, Miete 150k/h. /msg DT
- 3‑DCH‑Bundle: Verkaufe Sand im 3-DCH-Bundle (6x „Strandpaket“) – sofort lieferbar. Fixpreis. /msg DT
- Auftragsabbau: Nehme Aufträge: Sand/Gravel dch-weise mit eigener Shulker-Logistik. /msg DT
- Support‑Hinweis: Support ≠ Geschenkannahme. Für Trades bitte /msg – danke.

### Reset-/Spielstatus
- Farmwelt‑Reset traditionell am Freitag; im Chat eingeblendet: „Welt wird am 15.08.2025 um 16:00 zurückgesetzt“.
- Job‑Cap sichtbar („verbleibend xx.xxx“). Wichtig fürs Timing.
- Liquidität: angezeigte Kontostände schwankten um ~13–33k$ (je nach Zeitpunkt/Server).

### Reset-Rush (Freitag 16:00)
- Erste Stunde: High-Demand (Erze, Quartz, Logs, Stein, Zuckerrohr).
- Direktverkauf an Großabnehmer („nehme DCH‑weise, fester Preis“) statt chaotischem /ah.
- Flippen: Unterpreislistings in /ah kaufen → Peakzeiten teurer relisten.

### Sicherer Leih-/Ratenkauf
- Leih‑Bohrer nur mit Kaution + Miete + /trade/Middleman.
  Beispiel‑Snippet: Leiher V3-Bohrer für 30–60 min gesucht. Kaution 200k, Miete 150k/h. /msg DT
- Ratenkauf: schriftlich im Chat fixieren + Middleman (Screenshots machen).

### Job-Cap & Booster
- Job‑Cap im Blick → bei Annäherung Aktivität wechseln.
- Falls vorhanden: Booster exakt zum Reset timen (eigene Kristalle, nicht handelbar).

### Naming & Flow
- Amboss‑Benennung: ① Strandkiste … ⑥ Strandkiste → schnelle Vollständigkeitskontrolle.
- Run‑Ablauf: 6 Shulker füllen → /home → 3 DCH abgeben → zurück (EC als Puffer).
- Angebots‑Snippets:
Verkaufe Sand im 3-DCH-Bundle (6x „Strandpaket“) – sofort lieferbar. Fixpreis. /msg DT
Nehme Aufträge: Sand/Gravel dch-weise, eigene Shulker (Strandpaket). /msg DT

### Beobachtung
- Sandkastenschaufel wirkt „kurzlebig“, trotz Eff X/Haltb VIII/Mending.
- Vermutung: intern kein Dia (eher Gold/Eisen‑Basis).

### TNT‑„Ball“ & WorldEdit
- Mit /fill nur Quader möglich; Kugel via WorldEdit:
- Voll: //sphere tnt <r> – Hohl: //hsphere tnt <r>.
- Empfohlene Größen (Server‑schonend): r=8–12; //limit 2000 + //undo als Safety.
- Hohl‑Schale erzeugen:

    //sphere tnt 12
    //sphere air 11   # 1‑Block‑Schale
- Auf OPSucht evtl. keine WE‑Rechte → Singleplayer/Privatwelt nutzen, falls nötig.

### Chat‑Etikette & Support
- Geschenke/Trades kein Support‑Thema → per /msg, /trade, /ah klären.
- Snippets:
- Support ≠ Geschenkannahme. Für Trades bitte /msg – danke.
- Geschenke bitte per /msg & /trade klären – Support ist für Probleme/Fragen.

### Discord‑Leveling (Nickname „Drama Level 1“)
- Der „Level 1“‑Text im Profil ist nur Name/Banner → kein Auto‑Level.
- Echte Level kommen von Bots (MEE6/Arcane/Amari/ProBot): ~15–25 XP/Nachricht, 60 s Cooldown.
- Von Level 1 → 2: grob 8–12 Nachrichten (je nach Bot).
- Exakte Anzeige: /rank @User bzw. !rank → „XP bis Level‑Up“.
- ETA‑Daumenregel: Minuten ≈ ceil(Fehlende XP / 20).

### Eigene Anpassungen
- Idee: Eigenes Datapack, das beim Start Skillpunkte oder Items vergibt, um Runs weniger frustrierend zu machen.
- Starter-Kit: z. B. 10 Punkte sofort beim Start, oder Ressourcen (Diamant, Gold, Kupfer, Kohle), damit man schneller craften kann.
- Anpassung per Funktion (/function starter:give_points) ist sauberer als manuelles Editieren von Player-NBT.
- Vorteil: Updatesicher und flexibel – kein direkter Eingriff in Roguecraft.

### Fazit
- Roguecraft: Puristisches, aktives Roguelite-Datapack, herausfordernd, aktiv gepflegt.
- Roguecraft Evolved: Erweiterte, immersivere Erfahrung, aber communitygeführt und weniger stabil.
- Für mich: Ich finde es spannend, mit eigenen Anpassungen (Starter-Kits, Datapacks) zu experimentieren, auch wenn das nicht der vom Entwickler vorgesehene Spielstil ist.
- Zukunft: Experimentieren mit Custom-Setups, Skillpunkte schneller zugänglich machen, und ggf. ein eigenes Modpack bauen, um die Installation für Server und Freunde einfacher zu gestalten.

Datei erstellt am: 2025-09-10

### Allgemeine Beobachtungen zu Servern (OPsucht, CB-Welten)
- Auf den Citybuild-/Plotservern fällt auf, dass man in der Tab-Liste schnell erkennt, ob Teammitglieder online sind oder nicht.
- Ohne Teamler: Platin-Spieler wie DiamantTh stehen sehr weit oben.
- Mit Teamlern: diese rücken nach oben, Platin rutscht darunter.
- Dieses Verhalten zeigt, dass die Tab-Sortierung nach Rängen + Teamrollen funktioniert.

### Kotlin vs. Java im Modding
- Trend: viele Mods werden heute in Kotlin geschrieben statt in Java.
- Vorteile: kürzerer Code, Null-Safety, Extension Functions, DSLs.
- Fabric-Umfeld fördert Kotlin, Forge eher noch Java-lastig.

### Voxel Volume Size
- Verdoppeln von 128×128 auf 256×256 führt zu exponentieller Laststeigerung (8× mehr Berechnung).
- Selbst eine RTX A4500 läuft bei 2560×1080 schnell bei 95–100 % GPU-Auslastung.
- Sweet Spot: 128×128 reicht in den meisten Situationen völlig aus, GPU-Last bleibt bei ~60 %.

### Warum nicht alles gespeichert wird
- Nur explizite „persistent properties“ landen in der Config.
- Defaults werden nicht überschrieben → Datei bleibt klein.
- Runtime/Debug-Settings bewusst nicht persistiert (Stabilität, Migration bei Shader-Updates).

### Grundidee und Aufbau der Shows
Die Gespräche drehten sich stark um YouTuber wie LeKoopa (Nick Cooper) und NoRisk, die beide für ihre trolligen Minecraft-Mods und Verzauberungen bekannt sind.
Die Mods sind dabei meist nicht als faire Erweiterung gedacht, sondern eher als Comedy- oder Show-Elemente, die Zuschauer unterhalten sollen. Häufig werden dabei absurde, völlig unfaire Bedingungen geschaffen, sodass eine Person praktisch keine Chance hat. Daraus entstehen komische Situationen, die das Video tragen.

Die Struktur der Videos und Challenges ist meist dramaturgisch aufgebaut:
- Runde 1: noch halbwegs faire Gegner, aber schon ungleiche Bedingungen (Stock gegen Boss „Elon Musk“).
- Runde 2: Sabotage durch „OK Garmin“ (Creeper, Bedrock, Blocklimit).
- Finale: Server wird vom Assistenten absichtlich heruntergefahren – ein „Meta-Troll“ für das Videoende.

### Spezielle Mechaniken der Garmin-Mod
Die Garmin-Mod ist ein „Sprachassistent“, der aber absichtlich trollt:
- Inventar-Manipulation: Items werden ausgetauscht (Diamantschwert → Holzstock).
- Sabotage beim Bauen: Creeper spawnen, Bedrock blockiert den Weg, Blöcke gehen aus.
- Finale Kontrolle: „Garmin Video speichern…“ → alle Spieler werden disconnected.

Meine Beobachtung: Diese Mod ist eher wie ein Show-Regisseur gedacht, nicht als echte Spielhilfe. Sie sorgt dafür, dass LeKoopa in eine „Verliererrolle“ gedrängt wird, damit am Ende die Veröffentlichung der Mod quasi „erzwungen“ wird.

### Verifikation / Dopamin
- Spieler müssen Aufgaben lösen (Captcha-ähnlich), z. B. „Klicke ein Schwein“.
- Abkürzung: ein Button „Verifizieren“, um die Prüfung zu überspringen.
- Mit „Dopamin“-Enchant wird unkontrolliertes Zappeln/Tanzen verhindert – sonst bewegt sich der Spieler chaotisch.

### Slot
- Jeder Schlag verwandelt Mobs in andere Mobs → Glücksspiel-Charakter.
- Kann leichte Tiere oder schwere Bosse erzeugen → extrem unberechenbar.

### Ambosinator
- Jeder Schlag spawnt Ambosse über Gegnern.
- Mit jedem Treffer werden Mobs platter und kleiner – bis zu Comedy-Zwergenhöhe.

### Schnelles Fallen
- Erhöhte Schwerkraft, verringertes Springen.
- Ab Stufe 8 praktisch kein Springen mehr möglich.
- Für normale Spieler ruinös, für Pros eine MLG-Herausforderung.

### Phantom-Glitch
- Beim Schleichen sinkt man in den Boden.
- Je länger man gedrückt hält, desto tiefer.
- Auch bei Lava möglich – ohne Feuerschutz tödlich.
- Spiegelt auch NoRisks Abneigung gegen tiefe Höhlen wider.

### Zukunftsideen
- Eigene Umsetzung einer Troll-Enchant-Sammlung (z. B. Fabric-Mod oder Spigot-Plugin).
- Eventuell ein „Chaos-Assistent“ für Minecraft-Server, der Spieler wie Garmin sabotiert.
- Stufen-Systeme bei Enchants bewusst so designen, dass sie eskalieren (1 = witzig, 4/8 = unspielbar).
- Nutzung solcher Ideen für kleine Show-Events oder in einem „Troll-Minigame-Modpack“.

📅 Datum: 16.09.2025

### Minecraft-Kontext
- Diskussion, wie YouTuber (z. B. Emmy und Will) sich gegenseitig pranken könnten.
- Emmy hätte theoretisch über SSH die Möglichkeit, poweroff auszuführen – wahrscheinlicher ist aber, dass sie nur über Minecraft-Adminrechte verfügt.
- In Minecraft gibt es den Befehl /stop, der den gesamten Serverprozess beendet.
- Voraussetzung: höchster Operator-Level oder entsprechende LuckPerms-Rechte.

### Ausgangssituation
Im Material wurden eine Störungsmeldung von Vodafone gesehen, die auf nächtliche Wartungsarbeiten im Kabelnetz hinweist. Diese Arbeiten führten zu Verbindungsabbrüchen, die sich direkt auf Online-Aktivitäten auswirken – speziell auf das Spielen von Minecraft (z. B. auf dem Server OP-Sucht).

Im Material bemerkte, dass solche Wartungen wahrscheinlich remote stattfinden (Updates am CMTS, Frequenzoptimierungen, Konfigurationsänderungen), und dass vor Ort vermutlich niemand tätig ist. Dadurch entsteht die Situation, dass die Internetverbindung unvorhersehbar abreißt.

### Beobachtungen und Gedanken zu Vodafone-Wartungen
- Art der Wartungen: Wahrscheinlich Firmware-Updates, Routing-Änderungen, Konfigurationsänderungen im Backbone oder Frequenzaufteilungen für DOCSIS.
- Remote statt Vor-Ort: Hohe Wahrscheinlichkeit, dass nachts keine Techniker draußen am Verteilerkasten sind.
- Auswirkungen: Kurze, aber spürbare Unterbrechungen der Verbindung, ohne Vorwarnung.

### Auswirkungen auf Minecraft-Spielerfahrung
- Gefahr im Spiel: Bei einem Disconnect mitten in der Nacht in der Farmwelt können Mobs den Charakter angreifen. Das Risiko steigt, wenn wertvolle Items dabei sind.
- Unsicherheit: Nutzer empfindet Stress und „Schiss“, wenn der Client die Verbindung plötzlich trennt.
- Handlungsweise:
- Wechsel auf das Handy, um die Verbindung bewusst zu trennen.
- Shadow-PC herunterfahren, um nicht im Spiel ungeschützt online zu bleiben.

### Item-Funktionalität und Einschränkungen
- Bedrock kann durch Bedrock-Spitzhacke abgebaut werden – normalerweise für normale Spieler unmöglich.
- Vorsicht bei Setzen von Bedrock: Nur Admins können diesen ggf. wieder entfernen.
- Skriptbasierte Drop-Systeme ermöglichen z. B. den Drop von Bedrock beim Eisenabbau.

### Teleportationsschutz und Plots
- Spieler könnten mit Bedrock theoretisch eingesperrt werden.
- Schutzmechanismen wie Home, Spawn oder /swap-Befehle bieten Fluchtmöglichkeiten – abhängig von Permissions.

### Ofen umbenennen
- Es wurde die Frage gestellt, ob das Umbenennen von Öfen sinnvoll ist – z. B. für Roleplay oder Technik-Mechaniken.

### Römische Zahlen
Zum Abschluss wurde auch die Umwandlung von Zahlen in Römisch gewünscht:
- 3 = III
- 4 = IV
- 5 = V
- 6 = VI
- 7 = VII
- 8 = VIII
- 9 = IX
- 10 = X
- 11 = XI
- 12 = XII
- 13 = XIII
- 14 = XIV
- 15 = XV

Erstellt für zukünftige Verwendung und thematische Fortführung in weiteren Gesprächen.

## Mods, Shader, Clients und Pakete


Einordnung: Dieser Abschnitt bündelt die wiederkehrenden Linien des Themas und macht sichtbar, wie sich praktische Beobachtungen, Kritik, Lösungsansätze und größere Leitideen ineinander verschränken.

### Minimal‑Konzept
- Mail‑only + Auto‑Reply + Art.‑11‑Pfad, wenn Identität unklar.
- Export per Admin‑GUI/phpMyAdmin (Userprofil, PMs, Moderation, IP/Session).
- Öffentliche Beiträge i. d. R. bleiben, Account wird anonymisiert (Name/Signatur/Profilfelder neutral).
- Backups: keine Nachbearbeitung; Löschungen wirken prospektiv.

### Ausgangslage
In diesem Chat ging es um die Frage, wie gut Shader – insbesondere der „Complementary Reimagined“-Shader in Minecraft – auf unterschiedlichen Grafikkarten laufen. Dabei wurden sowohl die Hardware von „Einfach-Emmy“ als auch die eigene verglichen.
- Einfach-Emmy: NVIDIA GeForce GTX 1660 (6 GB), i9‑9900K, Full HD (1920×1080).
- Eigene Situation: AMD RX 580 (8 GB), etwas höhere Auflösung (2560×1080 Ultrawide).

Die Diskussion drehte sich um Unterschiede in Leistung, Effizienz und VRAM-Ausstattung.

### Diskussion zu VRAM und Zukunftstauglichkeit
- Seit Jahren wird 8 GB VRAM als Minimum für modernes Gaming angesehen.
- Bei Minecraft ist VRAM weniger kritisch, hier zählt die Shader-Rohleistung mehr.
- Im Vergleich: Emmy ist schneller, man selbst hat etwas mehr VRAM-Puffer, aber nicht die nötige Rechenleistung, um diesen Vorteil voll auszunutzen.
- Fazit: Für Minecraft gewinnt die GTX 1660, für manche neue AAA-Games könnte die RX 580 durch die 8 GB VRAM etwas länger mithalten – aber meist bei niedrigeren FPS.

### Fazit
- Emmy hat mit GTX 1660 + Full HD derzeit die ausgewogenere Kombination für Minecraft-Shader.
- Eigene RX 580 profitiert von mehr VRAM, ist aber in reiner Shader-Leistung unterlegen, besonders durch Ultrawide-Auflösung.
- Zukünftig machen die neuen RX 9000er Karten (insbesondere RX 9060 XT und 9070) richtig Lust, da sie sowohl Shader- als auch AAA-Gaming-Leistung massiv steigern.
- Eine RX 9060 (ohne XT) könnte ebenfalls interessant werden, wenn Preis und Effizienz stimmen.
- Langfristiges Ziel: Eine GPU mit mindestens 16 GB VRAM und moderner Architektur, um Minecraft mit Shadern und aktuelle Spiele in 2560×1080 oder höher flüssig zu genießen.

### GTX 1660 (Emmy)
- Modernere Turing-Architektur.
- 6 GB VRAM, dafür effizienter und pro Takt stärker.
- Sehr gut geeignet für Full-HD-Gaming mit Shadern.
- Limitation: nur 6 GB VRAM, was in modernen AAA-Titeln knapp wird.

### Performance-Einschätzungen bei Shadern
- Die GTX 1660 von Emmy kann Minecraft mit Shadern in Full HD flüssig darstellen.
- Die RX 580 kämpft stärker mit Shadern, insbesondere durch die höhere Auflösung.
- Runterskalieren auf Full HD oder FSR/DLSS-ähnliche Techniken könnten auch hier einen deutlichen FPS-Schub bringen.
- CPU-seitig sind beide Setups ausreichend stark, wobei Emmys i9‑9900K zusätzlich Reserven bietet.

### Persönliche Überlegungen und Planungen
- Shader-Setup: Man möchte langfristig eine GPU nutzen, die Shader in höherer Auflösung (z. B. 2560×1080) ohne Kompromisse darstellen kann.
- Aufrüstgedanken: RX 9060 XT oder 9070 erscheinen sehr attraktiv als zukünftige Upgrade-Ziele.
- Priorität: Moderne Architektur, mindestens 8–16 GB VRAM, um auch bei AAA-Games zukunftssicher zu bleiben.
- Einschätzung: Die 9060 XT wäre ein sinnvoller Mittelweg zwischen Preis und Leistung.

### RX 580 (eigene Karte)
- Polaris-Architektur, älter und weniger effizient.
- 8 GB VRAM, was in speicherhungrigen Spielen einen Vorteil bietet.
- Deutlich schwächer bei reiner Shader-/Rendering-Leistung.
- Bei 2560×1080 etwa 33 % mehr Pixel als bei Full HD → merkbarer Performanceverlust gegenüber Emmys Full-HD-Setup.

### RX 9060 (ohne XT)
- Erwartet für spätere Veröffentlichung.
- Vermutlich nur 8 GB VRAM, weniger Compute-Units als XT.
- Leistung ca. 10 % unter der XT, aber günstiger.
- Könnte ein Preis-Leistungs-Hit für 1080p-Gaming und Shader sein.

### RX 9060 XT
- Release: Juni 2025.
- Varianten: 8 GB und 16 GB.
- Architektur: RDNA 4, deutlich effizienter.
- Leistung: Schneller als RTX 5060 Ti, großer Sprung gegenüber RX 580 / GTX 1660.
- Preis: 299–349 USD.
- Interessant für Shader-Fans, da modernes Feature-Set + mehr Power.

### Allgemeiner Kontext
Dieser Themenblock behandelt die Unterschiede zwischen der Minecraft EULA (End User License Agreement), den Usage Guidelines von Mojang/Microsoft und der spezifischen Situation rund um die Mod Axiom von Moulberry.
Ein besonderer Fokus lag auf den Konflikten zwischen offenen Software-Prinzipien, Monetarisierungsmodellen und den Regeln, die innerhalb einer geplanten Sonderverwaltungszone (SVZ) gelten sollen.

### Zusammenfassung & Ausblick
- Die EULA bleibt das rechtlich bindende Dokument, die Usage Guidelines sind eine praktische Auslegung.
- Axiom ist ein Beispiel für eine Mod, die gegen Offenheitsprinzipien verstößt (Closed Source, Whitelist, Monetarisierung).
- In der SVZ wäre Axiom so nicht zulässig – Entwickler müssten sich auf offene Modelle einstellen.
- Meine persönliche Haltung: Ich setze klar auf GPL/Open-Source, und alles andere ist ein Hindernis für die Zukunft.

Interessant für die Zukunft:
- Vergleichstabellen erstellen (Axiom vs. FAWE, WorldEdit, Litematica).
- SVZ-Regeln formal niederschreiben (was Behörden nutzen dürfen, was ausgeschlossen ist).
- Szenarien simulieren: wie das Gremium mit Entwicklern diskutiert, die mit geschlossenen Projekten einwandern wollen.

### Eigenschaften von Axiom
- Ein Bau-Tool für Minecraft mit erweiterten Editierfunktionen.
- Client unter ARR (All Rights Reserved) → Closed Source.
- Einige Teile (Paper-Plugin, APIs, Branding) sind MIT-lizenziert und damit offen.
- Bietet Trial-Versionen und eine „Commercial License“ an, u. a. für Multiplayer-Support.
- Multiplayer-Nutzung wird teilweise über eine Discord-Whitelist geregelt.

### Konflikt mit Axiom
- Axiom wäre sofort ausgeschlossen, solange der Code geschlossen bleibt.
- Der Entwickler müsste sein Modell anpassen (z. B. Code öffnen, Whitelist entfernen).
- Sonst keine Integration in Behörden, keine Förderung und keine Repos.

Zukunftsplanung:
Wenn ich GPL-Patches schreiben würde, könnte ich Axiom-Funktionen technisch erweitern oder Schranken aushebeln.
Diese Patches wären frei, der Entwickler hätte wenig rechtliche Handhabe – aber das Problem ist, dass ich den gepatchten Client nicht veröffentlichen dürfte.
Das bestätigt meinen Weg: In meiner SVZ sollen solche Closed-Source-Modelle nicht gefördert werden.

### Beobachtung
- Viele Firmen, Netzwerke und YouTuber entwickeln eigene Minecraft-Launcher (z. B. NoRisk, LabyMod).
- Diese unterscheiden sich funktional oft nur geringfügig, setzen aber auf eigene Systeme (Addons, Shops, Cosmetics).

### Kritik und Gedanken
- Statt Zusammenarbeit entstehen viele parallele Lösungen.
- Ein modularer Ansatz mit gemeinsamem Kern und flexiblen Modulen wäre effizienter und für Spieler einfacher.
- Interesse: Einen freien Kern (GPL/AGPL) schaffen, der Module erlaubt und allen offensteht.

### Experimentelle Modifikationen
- Inspiration von NoRisk: Mods wie „Vegan“-Verzauberung oder Mini-Spiele (UNO in Minecraft).
- Ideen für ein flexibles Flag-System (SemVer-Prereleases, Safe-Mode, Rollback-Funktion).
- Unterschiedliche Instanzen (Playground vs. Main), um Stabilität zu gewährleisten.

### Weitere Loader
- LiteLoader: praktisch tot, letzte Version 1.12.2, keine aktive Codebasis.
- Fabric: heute Standard für leichte Mods, Quilt als Fork für noch mehr Modularität.
- Forge/NeoForge: für große, tiefgehende Modifikationen.

### Technische Aspekte und Mods
- Shader-Pakete: Nutzer bevorzugt wenige Profile und löscht regelmäßig alte Shader, während andere dutzende parallel nutzen.
- Experimente mit Immersive Portals:
- Portale zwischen Dimensionen (Overworld, Nether, End) manuell und automatisch verlinken.
- Nutzung für Miniwelten, schräge Portale, Kameraperspektiven.
- Kreative Konzepte wie die Penrose-/Escher-Treppe (unendliche Treppe).
- Pfeile und Objekte, die durch Portale geschossen werden können und dabei vergrößert/transformiert erscheinen.
- Räume, die größer sind als von außen sichtbar („Tardis-Effekt“).

### Moderne Zeit (ab 1.16)
- Datapacks: neue Dimensionen/Biome/Strukturen ohne Mods definierbar; Namespaces statt numerischer IDs („Flattening“ ab 1.13).
- Ergebnis: theoretisch beliebig viele Dimensionen, sauber registriert; weniger Inkompatibilitäten.

### Deine Beobachtung
- Modularität dient auch Mojang intern: Feature‑Pakete lassen sich mitten im Zyklus einschieben (z. B. 1.21.x). Die Community empfindet das teils als Zerfaserung – früher waren Hauptversionen „Events“.

### Beton und Trockenbeton
- Beton: Kräftige Farben, glatte Textur, ideal für moderne Villen. Stabil, benötigt Spitzhacke.
- Trockenbeton: Pulverform, fällt wie Sand/Kies, durch Wasser zu Beton härtbar. Praktisch für große Bauflächen.
- Übersetzungsdiskussion: Eigentlich „Betonpulver“ (wörtlich von Concrete Powder), in Minecraft DE aber als „Trockenbeton“ bezeichnet, da es an Bau-Realität erinnert.

### Modern
- Hauptmaterial: Weißer Beton oder glatter Quarz
- Akzente: Schwarzer Beton oder Tiefenschiefer
- Dach: Poliertes Kupfer oder dunkle Treppenvarianten

### Quarz und helle Varianten
- Quarzblöcke (hell, modern, luxuriös)
- Glatter Quarz (minimalistisch, klar)
- Endsteinziegel (eher exotisch, hell)

### Stein- und Ziegelvarianten
- Steinziegel (klassisch und stabil)
- Polierter Andesit/Diorit/Granit (modern, sauberer Look)
- Tiefenschiefer-Ziegel/Kacheln (dunkel, luxuriös)
- Ziegelsteine (rustikal, Landhausstil)

### Weitere Materialien
- Beton (modern, kräftig), Terrakotta (erdig, gedämpft), Quarz (luxuriös), Glas für große Fensterflächen.
- Metalle wie Kupfer (oxidiert für Dächer), Eisenblöcke (industriell), Schwarzstein (Kontraste).

### Shader-Einstellungen
- Lightbreak Prevention: verhindert unschöne Lichtlecks an Blockkanten.
- Ohne: Lava/Fackeln scheinen durch winzige Spalten → unnatürliche weiße Linien.
- Mit: saubere Wände, realistischer, aber Übergänge wirken dunkler.
- Eigene Beobachtung: Gerade in Höhlen mit Lava ist der Unterschied klar sichtbar.
- Fazit: macht Sinn, wenn man Wert auf realistische Darstellung legt.

### Persönliche Gedanken und Zukunftsplanung
- Ich finde es spannend, wie OPSUCHT versucht, Content-Creator einzubinden, ohne dass es zu Chat-Spam oder Pay2Win kommt.
- Für mich ist wichtig:
- dass Creator-Ränge klar geregelt bleiben und nicht jeder wahllos Zugang bekommt.
- dass Ingame-Items wie der OP-Pass fair handelbar sind, ohne das Gleichgewicht zu kippen.
- Shader-Optionen sind für mich persönlich interessant, weil sie das Spielerlebnis optisch stark beeinflussen. Hier möchte ich in Zukunft weiter testen, welche Settings am besten zu meinem Spielstil passen.
- Beim Job-System plane ich, weiter den Miner zu leveln, um Perks und Booster gezielt einzusetzen. Der Mix aus dauerhaften und temporären Boni gefällt mir.

Dokument erstellt am 2025-09-15

### Ausgangspunkt
Der Chat drehte sich um die Eigenheiten von Minecraft Realms, insbesondere die Tatsache,
dass Realms immer an die aktuelle Version des Spiels gebunden sind. Dies bringt Vor- und Nachteile mit sich,
vor allem in Bezug auf die Nutzung von Clientmods.

### Nachteile für Mod-Spieler
- Mods wie Forge, Fabric oder Shaderpacks sind oft nicht sofort kompatibel.
- Selbst einfache QoL-Mods (Minimap, Zoom, HUD-Anzeigen) brechen mit jedem Update.
- Realms bieten keine Option, eine feste Version zu wählen (kein „Version Lock“).

### Überlegungen zu betroffenen Mods
Besonders stark betroffen sind Mods, die viele Casual-Spieler nutzen wollen, wie etwa:
- Optifine/Shader-Mods (oft verspätet nach Updates)
- Mini-Maps (Xaero’s, JourneyMap)
- Zoom-Features (Simple Zoom, Optifine Zoom)
- HUD/QoL-Mods (z. B. Statusübersichten)

Diese Mods sind nicht gameplay-verändernd, sondern reine Komfortfunktionen – trotzdem brechen sie durch die Update-Pflicht.

### Reddit
- Diskussionen wie: „Is there a way to keep my Realm on a set version?“
- Viele Spieler äußern Frust, weil Mods hinterherhinken.

### Glossar
- Ressourcenpack: Texturen, Modelle, Sounds, GUI/Fonts, Partikel.
- Datapack: Gameplay‑Daten (Rezepte, Funktionen, Loot, Advancements).
- pack_format: Mojang‑Zahl, die Kompatibilität mit einer MC‑Version kennzeichnet; Linien für Resource/Datapacks sind getrennt.
- Snapshot/Pre‑Release/RC: Vorab‑Builds mit eigenen pack_format‑Zwischenwerten.

Hinweis: Die genannten Zahlen orientieren sich an deiner bereitgestellten Wiki‑Seite und unserem Abgleich in diesem Chat. Mojang kann Werte in zukünftigen Versionen ändern; bei Abweichungen bitte das offizielle Changelog bzw. die aktualisierte Wiki‑Tabelle prüfen.

### Ausgangslage & Beobachtungen
- Im Launcher erscheinen Packs oft „kompatibel“, im Spiel jedoch rot markiert („inkompatibel“) – trotzdem ladbar.
- Es gibt faktisch zwei Zustände in der Liste: normal (weiß) und rot (inkompatibel). Rot bedeutet Warnung, nicht zwingend Defekt.
- Grund: Der Launcher filtert nach Projekt‑Metadaten (vom Entwickler gepflegt), Minecraft prüft hingegen streng nur den pack_format in pack.mcmeta.
- Kosmetische Packs (z. B. Regenbogen‑XP‑Leiste) und kleine Biome/GUI‑Tweaks laufen meist auch dann, wenn sie rot markiert sind – die Warnung ist häufig rein meta‑technisch.

### Technischer Kern: `pack.mcmeta` & `pack_format`
- pack.mcmeta ist eine JSON‑Datei. Für Ressourcenpacks akzeptiert Vanilla aktuell eine einzelne Zahl als pack_format. Listen/Ranges werden in Vanilla nicht offiziell als pack_format unterstützt (Idee: Erweiterung via zusätzlichem Feld, siehe Roadmap).
- Trennung wichtig: Ressourcenpacks (Texturen/Modelle/Sounds/GUI) und Datapacks (Rezepte, Loot‑Tables, Funktionen) haben unterschiedliche pack_format‑Linien.
- Folgefehler: Entwickler verwechseln manchmal die Linien und tragen z. B. einen Datapack‑Wert in ein Ressourcenpack ein → im Spiel rot.

### Kuriositäten & Snapshots (warum Zahlen „sprunghaft“ wirken)
- Mojang vergibt pack_format‑Nummern nicht linear. Zwischenwerte tauchen in Snapshots/Pre‑Releases auf und werden im finalen Release durch „glatte“ Werte ersetzt.
- Beispielzahlen aus unserer Analyse/Diskussion:
- 32 → 1.20.5 (Pre‑Release‑Kontext).
- 34 → 1.21 / 1.21.1 (Ressourcenpack‑Release‑Kontext).
- 46 → 1.21.0 Pre 1–4 und als Release‑Wert für 1.21.4 Ressourcenpacks (maßgeblich für dein Setup).
- 55 → 1.21.5 (Ressourcenpack‑Release‑Kontext).
- 61 → Snapshot 25w20a (Entwicklungsreihe Richtung 1.21.5) oder Datapack‑Wert im Bereich 1.21.4 – häufige Quelle der Verwechslung.
- Sprünge wie 61 → 71 entstehen, weil Mojang Änderungen sammelt und Zwischenwerte intern/kurzzeitig nutzt.
- Manche Pack‑Autoren „drehen“ absichtlich sehr hohe Werte (z. B. 64/70/999), damit nie „zu alt“ angezeigt wird – Ergebnis: In anderen Releases wirkt das Pack „zu neu“ und erscheint rot.

### Konkrete Fälle aus dem Chat
- Sandy Dunes: in pack.mcmeta stand u. a. pack_format: 61 → im 1.21.4‑Client rot/„zu neu“, obwohl die Texturen funktionieren.
- Animated Rainbow XP Bar: gleiches Muster – kosmetisches Pack, technisch ok, aber „inkompatibel“ markiert durch Meta.
- Dein Server läuft 1.21.4 → maßgeblich ist daher der Ressourcenpack‑Wert 46 (siehe Mapping unten). Wird ein höherer Snapshot/Datapack‑Wert eingetragen, meckert der Client.

### Praxis: So bekommst du „weiß“ statt „rot“
Backup des ZIP/Ordners.
pack.mcmeta öffnen und pack_format auf den korrekten Ressourcenpack‑Wert setzen (für 1.21.4: 46).
Beschreibung/sonstige Felder belassen.
Datei speichern, ZIP neu packen (falls nötig), im Spiel neu laden.
Validierung: Texturen/GUI checken; falls Mojang zwischen Minor‑Versionen GUI‑Assets ändert, fehlen ggf. nur neue Elemente (fallen meist nicht ins Gewicht).

Beispiel pack.mcmeta (Ressourcenpack, 1.21.4):
json
{
  "pack": {
    "pack_format": 46,
    "description": "Sandy Dunes / Rainbow XP – kompatibel mit 1.21.4"
  }
}

### Ideen & Zukunftsplanungen
- Bessere Toleranz im Client: Akzeptiere „n–1“ und „n+1“ (pack_format) ohne rot → reduziert Pflegeaufwand.
- Explizite Mehrfach‑Deklaration: Optionales Feld (z. B. supported_formats) mit {min_inclusive, max_inclusive} – so wären Ranges möglich, ohne Hacks mit Fantasiewerten.
- Qualitätssiegel im Portal: Portale/Launcher könnten automatisch prüfen, ob pack_format zur richtigen Linie (Resource vs. Data) passt und einen Hinweis zeigen.
- Eigene Wartungsroutine: Kleine Packs (XP‑Bar/GUI) bei Minor‑Updates nur Meta anpassen; große HD‑Packs selektiv updaten.

### To‑Dos / Nächste Schritte (für dich)
- Deine betroffenen Packs (z. B. Sandy Dunes, XP‑Bar) auf pack_format: 46 umstellen.
- Eine kleine Checkliste für neue Downloads: „Ist es Resource‑ oder Datapack? Stimmt die Linie?“
- Optional: Skript schreiben, das in ZIPs pack.mcmeta findet, den Wert prüft und auf 46 setzt (und Backup anlegt).

### Zukunftsplanungen und Ideen
- Umsetzung eines „Ultimate Tools“ als echtes Plugin: automatische Modus-Wechsel abhängig vom Block.
- Nutzung von CustomModelData für animierte, wechselnde Tool-Köpfe.
- Ausbau der Ressourcenseite: Sammlung von visuellen Konzepten für verschiedene OP-Items (Schild, Axt, Hybrid-Werkzeug).
- Eventuell Erweiterung zu einem eigenen Items-Set, das in einem speziellen Auktionshaus/Eventsystem verfügbar wäre.

Fazit:
Dieser Chat diente der kreativen und technischen Auseinandersetzung mit OP-Items im Minecraft-Kontext, insbesondere im Opsucht-Umfeld. Neben konkreten Überlegungen zur Umsetzung im Spiel (Commands, Plugins, Ressourcenpakete) lag ein besonderer Fokus auf dem Design-Aspekt: Wie ein „Alleskönner-Tool“ optisch und praktisch aussehen könnte.
Die entstandenen Bilder und Konzepte liefern eine gute Grundlage für künftige Weiterentwicklungen, sei es als tatsächliche Ingame-Items oder als visuelle Inspiration.

### Design-Überlegungen
Hybrid-Tool: Kombination aus Axtblatt, Pickaxe-Spitze und Schaufelblatt in einem Kopf.
Morphendes Tool: Werkzeugkopf wechselt je nach Blocktyp (z. B. Schaufelmodus bei Erde, Pickaxe bei Stein).
Dreizack-Idee: Verschiedene Köpfe an einem gemeinsamen Griff, die „ausgeklappt“ werden können.
Optische Details:
- Griff aus Holz/Leder mit Goldakzenten.
- Köpfe aus Diamant/Netherite mit Regenbogen-Touch.
- Runen, Glühen, Animationen, Farbverläufe.

### Möglichkeiten, solche Items zu erstellen
- /give-Befehl: Direktes Erstellen mit NBT und unsafe-Enchants. Reicht aber nicht für spezielle Effekte oder eigene Texturen.
- Custom Plugins:
- Events und PDC (PersistentDataContainer), um Effekte wie Knockback X auf Schilden wirklich umzusetzen.
- Schutz vor Missbrauch (z. B. durch Blockieren von Amboss/Grindstone).
- CustomModelData & Ressourcenpakete: Nur so lassen sich eigene Texturen/Bilder einfügen.
- Content-Plugins (ItemsAdder, MythicCrucible etc.): Komfortable Erstellung mit GUI und klarer Verwaltung.

### Für OPSucht / OPSMP direkt
- Eher schwierig, da Geschäftsmodell auf Kontrolle und Exklusivität setzt.
- Transparenz und CC-BY-SA würden deren Interessen widersprechen.

### Interesse & Ideen
- Ich finde spannend, wie Mods, Datapacks und Resourcepacks kombiniert werden können. Viele Launcher unterstützen Mods/Resourcepacks besser als reine Datapacks, daher ergibt es Sinn, Data Packs in Modpacks einzubinden.
- Besonders interessant: Möglichkeit, Starter-Kits oder Cheats einzubauen, auch wenn das nicht der ursprünglichen Philosophie entspricht.
- Kreativer Umgang: z. B. statt Runs mit komplettem Verlust lieber Punkte oder Items direkt im Starter-Kit.

### Unterschiede zu Official
- OFFICIAL: ~36 Mods, Fokus auf Performance, Stabilität und Komfort.
- EVOLVED: ~89 Mods, Fokus auf Atmosphäre, Gameplay-QoL und visuelle Vielfalt.
- OFFICIAL direkt vom Entwickler gepflegt, EVOLVED communitygeführt.

### Zukunftspläne
- Eigenes Starter-Datapack nutzen, um Roguecraft als „leichtere Version“ zu spielen.
- Ideen für alternative Modi: „Custom Roguecraft“ mit Starter-Kit, direktem Boost und vereinfachtem Anfang.
- Nutzung von Modpack-Generatoren wie PrismLauncher-Export oder Packwiz, um serverfähige Pakete zu bauen.
- Möglicherweise irgendwann Erweiterung in Richtung Multiplayer-Server mit vorgefertigten Kits.

### Überblick
In diesem Chat habe ich mich intensiv mit dem Minecraft-Datapack Roguecraft sowie der Modpack-Erweiterung Roguecraft Evolved beschäftigt. Wir haben Gemeinsamkeiten, Unterschiede, technische Details und meine persönlichen Gedanken über mögliche Anpassungen diskutiert.

### Eigene Gedanken & Zukunftsplanung
- Perfektionismus beim Shader-Einsatz: Wunsch nach dem „einen besten Shader“.
- Lösung: differenziert nach Anwendungsfall (Alltag vs. Cine).
- Fokus auf Performance-Optimierung → trotz Profi-GPU ist Minecraft oft limitiert durch Engine.
- Interesse an Balance: Optik + FPS, ohne überflüssige GPU-Last.
- Modliste ist stabil, zukunftssicher und gut für Recording/Content-Erstellung geeignet.

Fazit:
Minecraft ist durch alte Rendering-Technik grundsätzlich instabil. Mit Iris + Sodium + Mods wie Continuity und FerriteCore wird es aber performant und modernisiert. Shader wie Astralex und Rethinking Voxels ergänzen sich: Alltag vs. Showcase. Perfektionismus kann so kanalisiert werden, indem man zwei Shader-Profile nutzt. Kotlin setzt sich im Modding durch und wird Java teilweise ablösen. Deine aktuelle Modliste ist nahezu ideal abgestimmt.

### Aktuelle Config
- Exportdatei (rethinking-voxels_r0.1-beta9.txt) enthält nur ausgewählte Einstellungen (8 persistente Werte).
- Viele Änderungen sind runtime und werden nicht persistent gespeichert.
- Iris nutzt iris.properties für globale Settings und shaderpacks/<shader>.zip.txt für overrides.

### Grafik & Optik
- Continuity (CTM/CTMF), Entity Model/Texture Features, Capes → optische Verbesserungen.
- Continuity funktioniert bei dir auch ohne Indium → Indium nur bei Mods wie AE2 oder Tech Reborn nötig.

### Kritische Punkte
- ReplayMod: oft Quelle von Instabilitäten mit Shadern.
- Essential: sehr groß, kann Last verursachen.
- Continuity: läuft gut, kann aber in Kombination mit bestimmten Mods Indium brauchen.

### Performance-Kern
- Sodium, Iris, Lithium, FerriteCore, ModernFix, MoreCulling, ImmediatelyFast → optimieren Rendering und Spielperformance.
- Sehr solide Kombination ohne Konflikte.

### Shader im Alltag vs. Showcase
- Astralex Shader: basiert auf BSL, starkes Handlight, ideal für Citybuild/Plots → hell und alltagstauglich.
- Rethinking Voxels: physikalisch korrekter, realistischere GI, sehr GPU-intensiv → ideal für Screenshots und Cinematics.
- Idee: Zwei Shader-Profile nutzen (Alltag + Cine), um Perfektionismus zu vermeiden.

### Soziale/QoL-Mods
- BetterF3, BetterPingDisplay, Chatnotify, Permanent Chat Logs, Held Item Info → Komfortfunktionen.
- Essential, Screenshot-Uploader, ReplayMod, Voicechat → Social/Recording Features.

### Überblick über LabPBR und Shaderpacks
- Grundlage war die bereitgestellte shaderLABS-Liste der offiziell unterstützten Shaderpacks und Resourcepacks für LabPBR.
- Diese zeigte, welche Shader volle Unterstützung (✔️) für Features wie Porosität, SSS, Emission, AO, POM und Hardcoded Metals haben.
- Interessant: Viele bekannte Shader wie BSL, Kappa, AstraLex, Complementary, Arc, Noble, Nostalgia unterstützen LabPBR v1.3 voll. Andere (z. B. Chronos Path Tracer oder Chocapic13) decken nur Teilbereiche ab.

### Eigene Gedanken und Beobachtungen
- Bloop Shader: Nicht in der offiziellen shaderLABS-Liste, aber bestätigt „FullPBR“/volle LabPBR-Kompatibilität. Interessant, da moderner, performancefreundlicher Ansatz mit Realismus.
- Bliss Shader: Unterstützt ebenfalls LabPBR vollständig. Fokus liegt weniger auf striktem Fotorealismus, sondern eher auf starker Atmosphäre (dynamische Himmel, Biomeffekte). Polarisierender Look, aber technisch hochwertig.
- Rethinking Voxels: Ein Fork von Complementary Reimagined, mit erweitertem Farb- und Voxel-Stil. Nutzt „FullPBR“, da es die Basis von Complementary übernimmt. Damit besonders spannend für Experimente mit farbigem Licht und Blockästhetik.

### Realismus („RL Look“)
- Für besonders realistischen Look sind Shader wie Kappa, BSL, Arc, Continuum, Soft Voxels, Bloop empfehlenswert.
- Resourcepacks für Realismus: Optimum Realism, Stratum, Vanillaccurate/Realaccurate, Aequalis, MegaReal Pack.
- Kombinationen:
- High-End: KappaPT + Stratum → nahezu fotorealistisch, hardwarehungrig.
- Midrange: Bloop + Optimum Realism → moderner Realismus bei spielbaren FPS.
- Performancefreundlich: BSL + Vanillaccurate → realistisch, aber leichtgewichtig.

### Community-Trends und Beliebtheit
- Laut CurseForge/Modrinth sind die meistgenutzten Shader: Complementary Unbound/Reimagined, BSL, Sildur’s Vibrant, SEUS PTGI/Renewed.
- Neuere Favoriten mit wachsender Community: Bliss, Photon, Solas, Rethinking Voxels.
- Community-Feedback auf Reddit:
- Complementary Unbound + Euphoria Patches gilt als „best of both worlds“.
- Bliss und Photon werden oft für Atmosphäre und Realismus gelobt, aber Bliss polarisiert.
- KappaPT wird als High-End-Variante gesehen.

### Iris als Shaderplattform
- Einschränkung: Iris erlaubt nur einen Shader gleichzeitig (kein Kombinieren mehrerer Shader).
- Möglichkeit: Mehrere Resource Packs stapeln, um Shaderlook zu variieren.
- Wichtig: Manche Shader (z. B. Complementary, Bliss) bieten Presets und Profile, wodurch man intern variieren kann.

### Zukunftsplanung und Umsetzungsideen
- Ziel: Eigene Shader/Resource-Kombinationen testen, die sowohl realistisch als auch stimmungsvoll sind.
- Interesse: Vor allem Shader wie Bloop, Bliss, Rethinking Voxels, die moderne Ansätze nutzen.
- Plan: Unterschiedliche Profile einrichten (RL-Look, Atmosphärisch, Performance) und so flexibel zwischen Stilen wechseln.
- Beobachtung: Community-Trends decken sich mit den persönlichen Favoriten – nützlich für künftige Projekte oder Empfehlungen.

Fazit:
Die Diskussion hat gezeigt, dass die Auswahl an LabPBR-kompatiblen Shadern und Resource Packs groß ist. Während manche Shader (BSL, Complementary) klare Community-Standards darstellen, sind moderne Entwicklungen wie Bloop, Bliss und Rethinking Voxels spannende Kandidaten für eigene Tests und zukünftige Setups. Für den RL-Look sind besonders Kappa, BSL und Optimum Realism/Stratum-Kombinationen hervorzuheben.

### Meine Gedanken und Einschätzungen
- Viele dieser Mechaniken sind spielerisch unfair, aber als Show-Konzept genial.
- Die Enchants wirken wie eine Parodie auf Vanilla, teils wie Glücksspiel (Slot-Enchant).
- Für mich spannend ist die Frage, ob man solche Konzepte auch in eigene Projekte einbauen könnte – z. B. eine Sammlung von Fake-Enchants für Minigames oder als Comedy-Mod.
- Die Garmin-Idee hat Potenzial für ein Show-Control-Tool, das gezielt Spieler trollt und dramaturgische Situationen schafft.

### Vorsichtsmaßnahmen im Spiel
- Sicheren Logout-Platz anlegen (Loch graben, mit Blöcken zubauen).
- Nutzung von Befehlen wie /spawn, um sich in eine geschützte Zone zu retten.
- Panik-/Auto-Logout-Mods oder Hotkeys für schnellen Disconnect.

### Technische Ideen
- Monitoring-Tools (PingPlotter, Smokeping oder eigene Scripts) nutzen, um Verbindungsabbrüche frühzeitig zu erkennen.
- Auto-Logout-Mods, die bei extremen Pings oder Timeouts den Spieler automatisch ausloggen.
- Mobile Hotspot als Backup, um sich im Notfall sicher abzumelden.

### Zukünftige Planungen und mögliche Umsetzungen
- Minecraft-seitig: Installation und Test von Mods oder Plugins, die bei Verbindungsproblemen automatisch einen Logout auslösen.
- Netzwerk-seitig: Aufbau eines kleinen Monitoringsystems, um Abbrüche schneller zu bemerken, bevor sie im Spiel fatal werden.
- Notfall-Routine: Standardisierung eines Plans, wie man bei Disconnects reagiert (Handy als Plan B, sichere Orte im Spiel, Shadow schnell herunterfahren).

Fazit:
Vodafone-Wartungen laufen meist remote und bringen unvorhersehbare, aber kurze Ausfälle. Für Minecraft-Spieler bedeuten sie ein reales Risiko für Spielfortschritt und Items. Im Material wurden bereits reagiert, indem er sich über Handy ausgeloggt hat, und denkt über technische und spielinterne Schutzmaßnahmen nach, um in Zukunft besser vorbereitet zu sein.

### Teamverhalten
- Selbst Admins/Moderatoren laufen nicht permanent mit maximalen OP-Items herum.
- Viele OP-Items werden eher gezielt oder zum Farmen genutzt (z. B. der Bohrer oder Lavaschwamm).

## Community, Rechte und Projekte


Einordnung: Dieser Abschnitt bündelt die wiederkehrenden Linien des Themas und macht sichtbar, wie sich praktische Beobachtungen, Kritik, Lösungsansätze und größere Leitideen ineinander verschränken.

### Risiken für jüngere Mitglieder
- Wer sich als jünger entpuppt, kann aus dem Clan ausgeschlossen oder sogar von Discord gesperrt werden.
- Besonders ärgerlich ist dies bei Accounts mit Fortschritt, Skins oder Nitro-Abos.
- Ein Re-Entry ist oft erst möglich, wenn das tatsächliche Alter erreicht wird.

### Verhalten Älterer und Moderation
- Ältere Clanmitglieder oder Mods gehen unterschiedlich damit um: Manche ignorieren Altersvermutungen, andere nutzen sie als Machtspiel.
- Öffentliches Bloßstellen kann toxische Dynamiken fördern.
- Ideal ist ein ruhiger, interner Umgang durch die Moderation – ohne Community-Dramen.

### Sensibilisierung statt Kontrolle
- Anstelle von harten Regeln wäre ein stärkeres Bewusstsein für Verantwortlichkeit hilfreich.
- Clans könnten Schulungsmaterial oder Hinweise anbieten, warum bestimmte Altersregeln bestehen.

Erstellt: 2025-09-04 01:01

### Was ich interessant finde / Ideen zum Umsetzen
- Memes → echte Mechanik: Humor bleibt, Gameplay gewinnt.
- Duo-Mechanik „Laura“: selten, sozial bindend, ideal für Community-Events.
- „Königlich“ auf Krone: Flair + spürbarer, aber begrenzter Schutz.
- Brot-Heal: charmant, thematisch stark, guter Low-Tier-Support für Events.

### Transparenz im Minecraft-Ökosystem
- Viele Premium-Plugins oder Serverprojekte arbeiten intransparent und widersprechen teilweise dem Open-Source-Gedanken.
- Idee: Stärkere Einhaltung von freien Lizenzen (AGPL, GPL), sodass Code nicht künstlich geschlossen wird.
- Differenzierung: Eigenentwicklungen dürfen Closed Source sein, aber Projekte auf Basis freier Lizenzen müssen frei bleiben.

### Zweischneidiges Schwert
- Microsoft ist einerseits interessiert an Community-Feedback und Fairness.
- Andererseits achten sie extrem auf Markenschutz und wollen nicht wie eine „Überwachungsinstanz“ wirken.
- Umsetzung eines Compliance-Systems wäre also politisch heikel, aber möglich.

### Einführung einer Organisation
- Offizielle Organisation auf GitHub/Discord würde die Community spalten.
- Befürworter sehen Schutz der Spieler.
- Gegner sehen Gefahr von „Spitzeln“ und Kontrollverlust.

### Eigene Rolle
- Ich könnte mir vorstellen, selbst in einer solchen Rolle mitzuwirken – sei es angestellt oder als Community-Advisor.
- Ziel: Transparenz schaffen, faire Regeln durchsetzen und die Reaktionen der Devs beobachten.

### Offene Diskussion
- Ein öffentlicher Vorschlag (durch mich oder die gesamte Open-Source-Community) könnte Microsoft bereits bewegen, über so ein System nachzudenken.
- Selbst wenn es nicht umgesetzt wird, löst es Diskussionen über Fairness und Lizenztreue aus.

### Zukunftsvision
- Langfristig könnte eine Art Compliance-Gremium entstehen, das Open Source, Community und Microsoft verbindet.
- Dadurch würde die Minecraft-Szene klarer zwischen ehrlichen Projekten und Grauzonen-/Abzockmodellen unterscheiden.

### Eigene Gedanken dazu
- Mich stört besonders der Multiplayer-Aspekt, da er durch Whitelist und Lizenz eingeschränkt ist.
- Auch der Discord-Zwang ist unvereinbar mit meinen Vorstellungen von offener Software.
- Ich sehe, dass der Entwickler mit der OSS-Community eher anecken würde.
- Würde er in meine geplante SVZ einwandern, gäbe es sofort Konflikte, da unser Gremium klar gegen Plattformzwänge und geschlossene Modelle ist.

### Kritikpunkte
- Closed Source: Keine Forks, keine Audits, keine Community-Patches.
- Discord-Zwang: Plattformbindung widerspricht offenen Prinzipien.
- Kommerzialisierung: Trial, Paywall und Whitelist stehen im Spannungsfeld zur EULA (Pay2Win, Exklusiv-Versionen verboten).
- OSS-Community-Konflikt: Philosophie passt nicht zu offener Entwicklung und gemeinschaftlicher Verbesserung.

### Soziale Dynamik und Team-Reaktion
- Mögliche Reaktionen von Server-Teams:
- Verwunderung über junge Spieler mit Millionenbeträgen.
- Überraschung, wenn ein neu gegründeter Clan schnell wächst und verifiziert werden möchte.
- Interne Diskussionen im Team über die Organisation des Clans.
- Clan wird durch Fankultur, Identifikation und wirtschaftliche Schlagkraft interessant für die Community.

### Zukunftsplanung
- Aufbau einer Clan-Ökonomie, die professionell organisiert ist.
- Nutzung von KI, Management-Tools oder erfahrenen Spielern für Planung.
- Ziel: vom kleinen Start-Clan zu einer der großen etablierten Gruppen im Server-Netzwerk wachsen.
- Eventuell eigenes Branding, Strukturen und Projekte (Großbauten, Events).

### Fazit
Die Idee eines Clans, der ökonomisch stark ist, Dienstleistungen anbietet und viele Jugendliche anzieht, ist langfristig tragfähig.
Mit einem klaren Preismodell, Bohrer-Investitionen und guter Organisation könnte dieser Clan schnell ein fester Bestandteil der Minecraft-Community werden.
Parallel stellt sich die spannende Frage, wie Server-Teams und Mitspieler auf den schnellen Erfolg reagieren würden.

### Offene Fragen & Entscheidungsbedarf
- Will man maximale Sicherheit (kein Content‑Chaos) oder kontrollierte Show (separate Testumgebung)?
- Wie viel Inventar/Enderchest‑Reset ist der Community vermittelbar?
- Welche Kompensation bei nachgewiesenen Exploit‑Schäden?

### Eigene Bauprojekte und Spielideen
- Diskussion um Haus- und Stadtbau auf CityBuild:
- Limitierungen bei Plots (5 pro Spieler, erweiterbar durch Kauf).
- Zusammenführungen nur möglich, wenn Plots aneinandergrenzen.
- Risiko, dass einzelne Spieler eingeschlossen werden.
- Bauprojekte wie Keller, Lagerhäuser, Symmetrien bei 4er-, 6er-, 9er-Plots.
- Nutzung von Booster-Items zum Aushöhlen, aber Schwierigkeiten bei zu schneller Abtragung.
- Überlegungen zum Job-System (Farmer, Builder, Miner, Gräber):
- Farmer wurde eingeschränkt (z. B. Zuckerrohr zu lukrativ).
- Wünsche nach neuen Jobs (z. B. Baumpfleger für Laubfarmen).
- Jobs liefern Job-XP, die sich von normalen XP unterscheiden.
- Erfahrungen mit OP-Kisten, OP-Pässen und Perks: Gewinne wie Slime-Schutz, zusätzliche Kristalle oder seltene Items.

### Beobachtungen zu Streamern und Teammitgliedern
- Phil, Will, Emmy und andere als zentrale Figuren im Netzwerk:
- Phil mit Mikrofonproblemen und Insekten im Stream.
- Emmy mit Prank-Bewerbung als Supporterin („DeineMami“).
- Will mit speziellen Items (z. B. Tool, das Bauwerke in Geld umwandelt).
- Pranks eskalierten teilweise (TNT, WorldEdit, Lavafallen).
- Diskussionen über Supporter und Admins (z. B. Franky, Masel).
- Kritische Beobachtung der Community-Reaktionen auf Chats und Tickets.

### Zukunftsgedanken und Planungen
- Umsetzung eigener Minecraft-Testprojekte zur Visualisierung von Ideen (z. B. Städtebau, Pflegegerechte Wohnungen).
- Nutzung von Server-Events oder Clanprojekten, um größere Bauwerke gemeinschaftlich zu realisieren.
- Interesse daran, wie Community und Teams auf politische oder groß angelegte Bauprojekte reagieren würden.
- Möglichkeit, Ideen später in eigene Projekte (z. B. SVZ, OSI-Alternative, Open-Source-Regeln) zu übertragen.

### Fazit
Die Gespräche kreisen stark um große Bauprojekte, Servermechaniken, Clansysteme und kreative Modideen.
Es besteht eine klare Trennung zwischen eigenem Spielstil (strukturiert, langfristig, projektbezogen) und der Livestream-Kultur, die nicht dem eigenen Konsumverhalten entspricht.
Minecraft dient als Experimentierfeld, um reale Visionen (z. B. Städteplanung, alternative Organisationsformen) spielerisch vorzudenken.

### Grundgedanken zum Bau
- Ziel ist es, ein Haus oder eine Villa in Minecraft zu bauen, bei dem Holz nur an wenigen Stellen (z. B. Details, Fensterrahmen, Dachträger) eingesetzt wird.
- Der Fokus liegt darauf, Alternativen zu Holz zu finden, die eine moderne, edle oder mediterrane Optik ermöglichen.
- Interessant sind hierbei auch Übersetzungsfragen und Material-Logik (Beton vs. Trockenbeton, Ton vs. Terrakotta).

### Zukunftsplanung / Ideen
- Einsatz von Beton für klare, moderne Flächen. Trockenbeton könnte genutzt werden, um große Flächen schnell vorzubereiten und durch Wasser auszuhärten.
- Terrakotta eignet sich gut für mediterrane Stile oder Innenraumgestaltung. Vor allem glasierte Terrakotta bietet interessante Muster für Böden.
- Experimentieren mit Übersetzungen und Namensunterschieden (z. B. Betonpulver vs. Trockenbeton). Dies regt auch an, allgemein zu hinterfragen, wie Materialien sprachlich und inhaltlich passend genutzt werden.
- In künftigen Projekten könnte eine Kombination von Quarz, Beton und Terrakotta ohne viel Holz besonders spannend werden.

Fazit:
Für eine Minecraft-Villa ohne dominanten Holzeinsatz bieten sich viele Alternativen: Beton (modern), Terrakotta (erdig/warm), Quarz (luxuriös) und Steinvarianten (klassisch). Trockenbeton als Vorstufe ist praktisch, aber im Bau selbst wird vor allem fertiger Beton oder Terrakotta zum Einsatz kommen. Die Materialwahl hängt stark vom gewünschten Baustil ab – klassisch, modern oder mediterran.

### Entstehung des neuen Wikis
- Die Community war unzufrieden mit dem Fandom-Auftritt: zu viel Werbung, Tracking, eingeschränkte Freiheit für die Bearbeiter.
- 2023 erfolgte der „Exodus“: Der Großteil der aktiven Autoren zog um und gründete minecraft.wiki.
- Dieses Wiki ist mittlerweile das offizielle und von Mojang/Microsoft unterstützte Minecraft-Wiki.

### Persönliche Gedanken und Einschätzungen
- Besonders interessant ist, dass Fandom trotz eigener Interessen durch automatische Links die Konkurrenz unterstützt – ein Beispiel dafür, wie schwer Plattformen ohne Community auskommen.
- Bemerkenswert finde ich auch, dass eine Community sich professionalisieren musste (Firmengründung), um ihre Freiheit zu sichern. Das zeigt, wie ernst die Arbeit hinter einem Wiki mittlerweile genommen wird.
- Ich sehe in diesem Modell Parallelen zu meinen eigenen Vorstellungen: Community-getragene Projekte, die aber durch eine rechtliche Struktur wie eine Firma oder ein Verein abgesichert sind.
- Für meine Zukunftsplanungen (z. B. im Rahmen meiner SVZ-Ideen oder meiner eigenen Softwareprojekte) ist das ein gutes Vorbild: Freie Projekte brauchen manchmal eine minimale rechtliche Hülle, um langfristig stabil zu bleiben.

### Mögliche Umsetzungen und Ideen
- Ich könnte mir vorstellen, ähnliche Strukturen auch für meine Projekte zu nutzen: eine juristische Person, die nur das Nötigste verwaltet (Domains, Server, Verträge), während die Community oder Entwicklergruppe frei arbeiten kann.
- Der Ansatz passt zu meiner Philosophie, möglichst frei, offen und unabhängig von großen Konzernen zu bleiben – ähnlich wie die Minecraft-Community sich von Fandom gelöst hat.
- Denkbar wäre auch, diese Vorgehensweise als Argument oder Modell für meine Sonderverwaltungszone einzubringen: Community-Projekte mit rechtlicher Stabilität, aber ohne klassischen Konzern- oder Regierungscharakter.

Fazit:
Das Beispiel „minecraft.wiki“ zeigt, wie eine Community durch Entschlossenheit und rechtliche Absicherung (Block & Quill Ltd) die Kontrolle über ihre Inhalte zurückgewinnt. Es verbindet freie Mitarbeit mit professioneller Verwaltung – ein Modell, das auch für meine eigenen Projekte und Planungen sehr wertvoll sein kann.

### Hintergrund und Ausgangslage
- Der Clan NTW auf OP-Sucht war offenbar über längere Zeit sehr aktiv und betrieb ein großes Casino.
- Dieses Casino war stark im Spiel verankert und wurde von vielen Spielern genutzt, was dem Clan Reichweite und Macht verlieh.
- Casinos auf Minecraft-Servern sind umstritten, weil sie Glücksspielmechaniken in einer Community mit vielen Minderjährigen etablieren.

### Regeländerungen und stufenweises Vorgehen
Die Serverbetreiber führten ein mehrstufiges Vorgehen ein, um gegen Casinos vorzugehen:
Phase 1: Verbot von Chat-Werbung
- Werbung für Casinos im Chat wurde untersagt.
- Ziel war es, die Sichtbarkeit zu reduzieren, ohne die Mechanik sofort zu verbieten.
Phase 2: Verschärfte Maßnahmen
- Schlupflöcher (z. B. Umgehung durch Schreibtricks) wurden geschlossen.
- Die Diskussion in der Community nahm Fahrt auf, erste Spaltungen wurden sichtbar.
Phase 3: Generelles Verbot von Casinos
- Casinos durften nicht mehr aktiv betrieben werden.
- Viele Clans stellten ihre Casinos ein, NTW jedoch hielt sich nicht daran und provozierte.
Phase 4: Endgültiges Aus (bekannt seit ca. 3 Monaten)
- Komplettes Verbot, auch durch rechtliche Gründe (Jugendschutz, Glücksspielgesetze).
- Ab September gilt das endgültige Aus für alle Casinos auf OP-Sucht.

### Reaktionen der Community
- Frühe Phase: Spaltung zwischen Casino-Befürwortern und Gegnern.
- Phase 2/3: Stärkere Mehrheit gegen Casinos, die Pro-Seite wurde kleiner und teils belächelt.
- Streamer-Sicht (z. B. Phil): Ausraster im Stream, weil Clans wie NTW weiterhin bewusst Regeln umgingen und provozierten.
- Endphase: Allgemeiner Konsens, dass Casinos keinen Platz mehr haben. Fokus lag auf der Durchsetzung.

### Technische und organisatorische Aspekte
- Clans auf OP-Sucht müssen bei der Gründung sowohl einen Tag (z. B. [NTW]) als auch einen voll ausgeschriebenen Namen wählen.
- Es ist sicher, dass NTW also auch einen vollen Namen hatte, der aber nie öffentlich groß genutzt wurde.
- Der volle Name wurde in Streams/Videos nicht genannt, vermutlich um keine Bühne zu geben.

### Eigene Gedanken und Einschätzungen
- Das Vorgehen war absehbar: Serverregel → Verschärfung → Verbot → rechtliche Absicherung.
- NTW nutzte sein Casino als Identität, konnte aber langfristig nicht bestehen.
- Der Konflikt spaltete die Community, wurde aber spätestens ab Phase 3 von der Mehrheit gegen Casinos getragen.
- Ich sehe darin ein Beispiel, wie eine Idee („Clan-Casino“) von cool → umstritten → verboten kippt.
- Die parallele Diskussion um Lootboxen wird vermutlich die nächste Baustelle, auch serverübergreifend.

### Zukunftsplanungen und Überlegungen
- Für OP-Sucht: Fokus wird weg von Glücksspielmechaniken hin zu „sicheren“ Features gehen müssen.
- Für Clans wie NTW: Ohne Casinos verlieren sie ihr Alleinstellungsmerkmal, werden sich neu erfinden müssen oder verschwinden.
- Für die Community: Das Thema bleibt als Erinnerung bestehen („weißt du noch, NTW und die Casinos?“), aber verliert ab Herbst jede praktische Relevanz.
- Rechtlich: Ich erwarte, dass Lootboxen/Kisten auch stärker reguliert werden, weil sie im Kern genauso problematisch sind wie Casinos.

Fazit:
Das NTW-Casino auf OP-Sucht steht stellvertretend für einen Wandel in der Minecraft-Community: von geduldeten Glücksspielsystemen zu klaren Regeln und gesetzlichen Grenzen. Der Konflikt hat die Community gespalten, wird aber im Rückblick eher als Episode gesehen werden. Langfristig dürfte Jugendschutz immer stärker zum Maßstab werden, auch bei Ingame-Kisten und Mikrotransaktionen.

### Strategische Überlegungen und Umsetzung
Thomas entwickelte einen Plan, wie er den Booster optimal ausnutzen kann:
Freitag (Gräber-Boost): gezielter Abbau von Sand, rotem Sand und Kies; Fokus auf hohe Job-Action-Rate.
Samstag (Holzfäller-Boost): Nutzung vorhandener Baumplantagen; paralleler Lageraufbau für Holzsorten.
Sonntag (Minenarbeiter-Boost): Kombination aus Erzabbau und Materialgewinn für spätere Projekte.

Er ergänzte die Strategie mit klarer Priorisierung: unnötige Materialien (z. B. Stöcke) werden direkt als Brennstoff genutzt, um Effizienz zu steigern. So vermeidet er Leerlauf, ohne seine Lager zu überfüllen.

### Mögliche Probleme
- Kombination aus freier Lizenz + Transparenz = „komplizierter Fall“ für OPSucht.
- Gefahr, dass ich als Risiko gesehen werde, nicht als Gewinn.
- Besonders kritisch, wenn ich offenlege, mit wem ich gesprochen habe und welche Inhalte Thema waren.

### Für andere Projekte
- Community-nahe Server oder Non-Profit-Projekte könnten offener reagieren.
- Dort wäre mein Modell sogar ein Pluspunkt:
- Glaubwürdigkeit durch Transparenz
- Nachhaltigkeit durch freie Lizenz
- Ich könnte mich gezielt an solche Projekte halten, statt mich in Konflikte mit kommerziellen Firmen zu begeben.

### Zukunftsüberlegungen
- Vor einer Bewerbung wäre es sinnvoll, direkt klarzustellen: „Ich arbeite nur transparent und unter CC-BY-SA.“
- So verschwende ich keine Zeit und filtere gleich Projekte, die zu mir passen.
- Für mich gilt: Lieber weniger Projekte, dafür aber solche, die meine Prinzipien respektieren.
- Eventuell könnte ich auch zwei Strategien fahren:
- Strategie A: Mitarbeit in kommerziellen Projekten – aber nur, wenn gewisse Kompromisse möglich sind.
- Strategie B: Fokus auf freie Community-Projekte – dort volle Transparenz und freie Lizenz.

### Einleitung
In diesem Gespräch habe ich meine Gedanken dazu gesammelt, wie eine Bewerbung oder Mitarbeit bei OPSMP (und indirekt OPSucht als Trägerfirma) ablaufen könnte. Es geht vor allem um Fragen der Lizenzierung meiner Konzepte, um Transparenz in der Kommunikation sowie um mögliche Konflikte zwischen meinem offenen Ansatz (CC-BY-SA, Veröffentlichung von Gesprächen) und den kommerziellen Interessen von OPSucht.

### Fazit
Ich erkenne klar, dass mein Ansatz (CC-BY-SA + Transparenz) mit Firmen wie OPSucht im Konflikt steht. Für mich bedeutet das: Entweder bewusst außen vor bleiben oder meine Bedingungen von Anfang an offen kommunizieren.
Die wahrscheinlich sinnvollere Zukunft liegt darin, mich stärker auf Community-nahe, offene Projekte zu konzentrieren, wo mein Ansatz nicht als Störfaktor, sondern als Mehrwert gesehen wird.

Stand: 2025-09-10

### Allgemeine Chat-Momente und Community-Dynamik
- Autsch-Momente: Spieler verlieren wertvolle Items im Void oder durch Farmwelt-Resets. Diese Situationen sorgen oft für Frust, zeigen aber auch die Risiken von teuren Items im aktiven Gameplay.
- Markt-Diskussionen: Im Chat gab es Proteste gegen hohe Preise, speziell beim „Bohrer“. Spieler nutzen sogar Karten-Items mit satirischen Namen wie „Stoppt den Bohrer – Preis Wahnsinn“, um ein Statement zu setzen.
- Clanregeln: Ein Spieler forderte WhatsApp als Pflicht für Clan-Mitglieder. Dies wurde kritisch gesehen, da es Spieler ausschließt. Thomas selbst fände es humorvoller, Clans mit Tags wie THRMA (Threema) oder DSVGO zu gründen – als satirische Reaktion auf unnötige Hürden.

### Gedanken und Ideen
- Archivierung: Thomas überlegt, ein inoffizielles Community-Archiv für OPSucht-Items aufzubauen, um auch alte Items (Ex-Teamler, alte Events) zu dokumentieren. /items ist unvollständig, das Wiki ebenso.
- Handelssystem: Er denkt darüber nach, Items nach Kategorien zu bewerten: stabil (in /items gelistet), spekulativ (noch gehandelt, aber undokumentiert), und historisch (verloren oder nur bei Sammlern).
- Clans: Ein satirischer Clan mit Tags wie THRMA oder DSVGO könnte gleichzeitig als Meme und Statement gegen unnötige Einschränkungen dienen.

### Fazit
Thomas beobachtet und reflektiert nicht nur die Marktmechanismen und Community-Reaktionen auf OPSucht, sondern denkt auch über Meta-Ebenen nach – von faireren Support-Systemen (ohne Discord-Zwang) bis hin zu einem möglichen Community-Archiv für Items. Gleichzeitig bleibt der Humor nicht auf der Strecke: satirische Clan-Ideen und das Sammeln von „Server-Memes“ gehören genauso dazu wie ernsthafte Optimierung von Auktions- und Itemstrategien.

## Items, Wirtschaft und Progression


Einordnung: Dieser Abschnitt bündelt die wiederkehrenden Linien des Themas und macht sichtbar, wie sich praktische Beobachtungen, Kritik, Lösungsansätze und größere Leitideen ineinander verschränken.

### Kontext & Ausgangsmaterial
- Zwei In-Game-Screenshots (03:49:17 und 03:50:06) zeigen Tooltips von „Faultier654s Krönchen“ und „Caleric’s Brot“.
- Auffälligkeiten im Chat und in den Item-Tooltips führten zu „lol?“ / „ähm?“ und später zu gezielten Fragen.
- Ziel dieses Threads: Bedeutung der Felder (v. a. Seltenheit) und der vermeintlichen „Verzauberungen“ klären sowie daraus passende, echte Custom-Enchants entwickeln.

### Erste Deutung
- Die Zeilen „Freunde/Support/Göttin/Laura X“ sind keine echten Vanilla-Verzauberungen, sondern Lore/Custom-Text (grau), der wie Enchants ästhetisch formatiert ist.
- Realer mechanischer Effekt im Beispiel: Krönchen zeigt „Angelegt: +7 Rüstung“ (Attribut-Modifier). Brot hat mechanisch keinen Effekt.
- Diskussion: „Laura“ könnte ein Easter Egg (Person/Bestie) sein – keine belastbare IRL-Aussage.

### Zielbild (deine Vision)
Aus den Memes echte, sinnvolle Verzauberungen machen, die:
- thematisch passen, servertauglich sind und mehrstufig skalieren (I–X),
- Teamplay fördern (Auren, Duo-Boni), ohne PvP aus dem Gleichgewicht zu bringen,
- klar konfigurierbar sind (Caps, Cooldowns, Ally-Erkennung, Konflikte mit Totems etc.),
- optional Item-spezifische Varianten (Krönchen/Brot) berücksichtigen.

### Item-Spezials
- ROYAL GUARD I–V (Krönchen): Flache Schadensreduktion +3 % × Lvl (Cap 15 %) — separat zum Armor-Cap.
- BÄCKER I–III (Brot): Rechtsklick heilt 3/4/5 Verbündete im 6-Block-Radius um 3♥ und füllt 6 Hunger. Verbraucht 1 Brot. CD: 45/40/35 s. Mit FREUNDE: +1 Ziel.

### Exklusive Redstone-Welt
- Eine spezielle Welt für technisch versierte und „reiche“ Spieler.
- Läuft auf leistungsstärkerer Hardware, erlaubt mehr Redstone-Schaltungen und höhere Auslastung.
- Einschränkungen und Kosten sind bewusst höher, um Exklusivität zu schaffen und Inflation zu verhindern.
- Spawner und spezielle Items sind dort teurer, wodurch sie Prestige-Charakter haben.

### Lobby-Design
- Lobbys sind bewusst „leichtgewichtig“: kein Banking, kein Geldsystem, nur PvP als Beschäftigungsmöglichkeit.
- PvP ist opt-in: nur wer ein Schwert in der Hand hält, kann kämpfen.
- Dadurch bleiben die Lobbys entlastet und unabhängig von der Wirtschaft.

### Werkzeuge und Items
- Bohrer (V3): sehr begehrtes Item, enormer Vorteil beim Aushöhlen (3x3 oder 4x4 Felder).
- Normale Spitzhacken mit hoher Effizienz sind auch nützlich, aber deutlich langsamer.
- Idee: Clan könnte zusammenarbeiten, um Bohrer oder teure Items zu kaufen oder leihen.
- Wirtschaftliche Stärke ermöglicht Investition in diese Items.

### Wirtschaftliche Überlegungen
- Clan könnte durch Farming, Mining und Plot-Dienstleistungen Millionen im Spiel erwirtschaften.
- Stammspieler mit 100+ Millionen Spielgeld wären eine solide Basis für Investitionen.
- Einnahmen können in teure Items (Bohrer, rare Werkzeuge) fließen, um die Clan-Effizienz zu steigern.
- Dienstleistungen wie „Plot leeren“ oder „Farmflächen vorbereiten“ können festen Marktwert entwickeln.

### Wirtschaft & Balance
- Inflation/Marktverzerrung: Regelmäßiger, risikoloser Zufluss seltener Items → Preisverfall, Frust legitimer Spieler.
- „Geld-Druck“ via Shops/Economy-Verknüpfung, wenn Farmwelt-Items 1:1 in Haupt-Ökonomie konvertieren.

### Kurzes TL;DR
- Problem: Unvollständige Farmwelt‑Resets + fehlende Border/Container‑Kontrollen → Kisten/Items überleben → Unendlichkeitstrick.
- Folge: Wirtschaftsschäden & Drama; teils bewusst geduldet wegen Content.
- Lösung: Harte Border‑Enforcement, vollständiger Persistenz‑Purge, Logging/Alerts, Economy‑Trennung, klare Policy.
- Vorausschau: Separate Content‑Spielwiese statt Exploit in Live‑Ökonomie.

### Enchantments und Werkzeuge
- Glück III auf Schaufeln:
- Nicht sinnvoll für Kies, da 100 % Feuerstein droppen und somit der eigentliche Kies verloren geht.
- Besser: zwei getrennte Werkzeuge nutzen – eine Schaufel mit Behutsamkeit für Kies, eine mit Glück III gezielt für Feuerstein.
- Allgemeiner Tipp: Kombination aus spezialisierten Werkzeugen bringt mehr Flexibilität.

### Auktionen und Items
- OP-Pass Ticket: Jackpot-Item aus dem Auktionshaus.
- Hat nichts mit Creator-Rang zu tun.
- Muss im Ticket-Support eingelöst werden, um den OP-Pass für ein Chapter zu bekommen.
- Gedanken: Spieler verkaufen solche Tickets, wenn sie
- lieber Ingame-Währung wollen,
- den Pass nicht selbst nutzen,
- oder generell am Trading interessiert sind.

### Erwerb und Nutzung von besonderen Items
- Du hast dir im Auktionshaus auf Opsucht das Sommerschild gegönnt, welches durch extrem starke Verzauberungen auffällt: Knockback X, Mending und Unbreaking VI.
- Dein Ziel war es, ein Item mit besseren Effekten zu haben, das im Spiel einen Vorteil bringt und gleichzeitig besonders wirkt.
- Einschätzung: Das Schild ist fast unzerstörbar, heilt sich selbst und wirft Gegner mit unglaublicher Wucht zurück.
- Nutzung: Du möchtest es aktiv einsetzen, um mehr Spaß im PvP und PvE zu haben.

### Gedankenspiele zu OP-Items
- Wie würde ein Item aussehen, das alle Verzauberungen trägt?
- Beispiele wurden erstellt: „Gottklinge“ (Schwert mit allen Schadens- und Looting-Verzauberungen) und „Sommerschild++“ (Schild mit allen Schutz- und Rückstoß-Verzauberungen).
- Erkenntnis: Nicht alle Enchants wirken in Vanilla wirklich, einiges müsste durch Plugins simuliert werden.

### Mächtige Items – Beispiel Bohrer
- Eigenschaften: 6x6 Radius, enorme Haltbarkeit, extrem hohes Glück.
- Effekt: Farmen wird massiv beschleunigt → Produktivitätsvorteil.
- Der Bohrer ist Symbol für High-Class-Spieler, kaum verkäuflich außer bei Sonderfällen.
- Vergleich: normale Spitzhacke = Schubkarre, Event-Tool = LKW, Bohrer = Bagger.

### Verzauberungen und Vanilla-Limits
- Vanilla begrenzt Schutz und Effizienz (z. B. Schutz IV, Haltbarkeit III).
- OP-Sucht überschreitet diese Limits: Haltbarkeit 26, Effizienz 15+, Glück 20+.
- Anzeigeproblem: römische Zahlen brechen ab → Anzeige als „Haltbarkeit 26“ statt „XXVI“.
- Mein Gedanke: Mojang könnte einfach arabische Zahlen ab Level 11 nutzen, mit Zeichenlimit (5–6 Stellen).

### Rüstungen und Schutzkombinationen
- Vanilla: Schutzarten sind exklusiv, Spezialisierung ist Pflicht (z. B. Schutz oder Feuerschutz).
- OP-Sucht: Event-Items kombinieren Schutzarten (z. B. Schutz 10 + Feuerschutz 6).
- Vorteil: Allround-Sets, die alle Umgebungen abdecken (Nether, Wasser, Overworld).
- Prestige: Je mehr Schutzarten gleichzeitig, desto teurer → Komfort und Prestige.

### Nutzung im Spiel (z. B. Nether/Lava)
- Mit OP-Rüstung und Tränken kann ich fast problemlos durch Lava laufen.
- Tränke verstärken Effekte (Regeneration, Feuerresistenz, Speed).
- Haltbarkeit bleibt ein Punkt: auch OP-Items haben eine Materialbasis (z. B. Gold = schwach, Netherite = stabil).
- Fazit: Basis-Material ist wichtig, NBT-Daten geben Aufschluss.

### Item-IDs und Codes
- Viele Items haben spezielle Hashes (#146CX), die sie eindeutig machen.
- Diese Codes dienen als Anti-Fake-Schutz, Seriennummer oder Event-Kennung.
- Für Sammler steigert das den Wert, weil Items einzigartig sind.

### Offizielle vs. Sonder-Items
- Offizielle OP-Sets: (Allay, Amor, Deadpool, Engels usw.) → klar dokumentiert, spielerisch relevant.
- Sonder-Items: Admin-Jacken, Frontmann-Hose, ältere Kollektionen → nicht mehr im Wiki, oft nur Sammlerwert.
- Mein Fazit: Prestige vs. Spielwert. Manche Items sind OP fürs Farmen, andere wertvoll wegen Exklusivität.

### Analyse der Jobs und Werte
Anhand der Screenshots wurde deutlich, wie weit seine Jobs fortgeschritten sind:
- Gräber (Level 25) – 2,86 $/Aktion, stark ausgebaut und Hauptverdienstquelle. Ideal für Sand- und Kiesfarmen, besonders mit 100 % Money Boost.
- Holzfäller (Level 16) – 6,81 $/Aktion, zweiter Hauptjob, verbunden mit seiner natürlichen Spielweise.
- Minenarbeiter (Level 15) – 2,25 $/Aktion, solide Ergänzung mit Materialnutzen (Erze, Steine).
- Jäger (Level 11) – 27,25 $/Aktion, profitabel, aber nicht im Fokus während der Boost-Woche.
- Builder (Level 8) – 0,08 $/Aktion, kaum lohnenswert, dient eher ästhetischen Zwecken.
- Farmer (Level 2) und Fischer (Level 1) – existieren eher am Rand seines Systems; werden selten aktiv genutzt.

Diese klare Hierarchie verdeutlicht Thomas’ strukturierten Ansatz: Er priorisiert Tätigkeiten, die sowohl spielmechanisch als auch wirtschaftlich nachhaltig sind.

### Interpretation – Effizienzdenken und Routine
Die Gespräche zeigen ein starkes Bewusstsein für Effizienz, Materialkreisläufe und Jobprogression. Thomas verbindet praktische Routinen (z. B. Lagerführung, Vorratsaufbau) mit spielmechanischer Optimierung. Auch Humor spielt hinein – etwa seine ironische Bemerkung, dass er „Sand hortet wie andere Klopapier“, was gleichzeitig seine Sammelleidenschaft und sein Verständnis für Ressourcenwirtschaft verdeutlicht.

Diese Haltung steht für seine generelle Spielphilosophie: langfristige Planung, systematisches Vorgehen und eine klare Linie zwischen Spaß, Ordnung und Fortschritt.

### Ausgangssituation
Im Gespräch ging es um die Frustration eines Spielers auf OPSucht.
Der Spieler hatte einen Bug (X-Ray-Glitch) gemeldet, bekam jedoch nur die Antwort, dass dieser bereits bekannt sei.
Dies führte dazu, dass er sich nicht ernst genommen fühlte, obwohl er ehrlich gehandelt hatte.
Sein Entschluss: Plots und wertvolle Items zu verkaufen und mit dem Spiel aufzuhören.

### Auktionshaus und Handelsstrategien
- Laufzeiten: Maximal 24h, daher ist gutes Timing entscheidend (Wochenenden oder abends in Stoßzeiten sind am besten).
- Preise und Wahrnehmung: Items wie „Normale Hose“ (aus Vote-Kisten) sind eigentlich Massenware, können aber durch Anfänger trotzdem für 10k+ weggehen. Umgekehrt bleiben sie manchmal selbst bei 2,5k liegen.
- Taktiken:
- Billige Vote-Items → ins Auktionshaus für überhöhte Anfänger-Gebote.
- Hochwertige Sammler-Items → besser über direkten Handel oder Discord.

### Item-Management und Enchanting
- Amboss-Grenzen: „Zu teuer!“ tritt ab Level 40 XP auf. Planung beim Kombinieren ist entscheidend.
- Versehen bei Verzauberungen: Ein Schwert bekam ungewollt Nemesis der Gliederfüßer V. Ist nicht schlimm, bleibt aber ein „toter Slot“. Lösung: Neues Schwert sauber aufbauen und das alte als Farm-Schwert behalten.
- Optimierte Schwerter:
- „Licht’s Zorn“ mit Schärfe V, Schwungkraft III, Plünderung III → gutes Main-Schwert.
- Neben- und Farm-Schwerter sinnvoll ergänzen.

### Übersicht von OP- und Custom-Schwertern
- /items Befehl: Zeigt viele Event- und Sonderitems mit Stats, Effekten und Sammlerwert. Beispiele: Schicksalssense, BDAY Schwert, Sommersschwert, Mobfarmschwert, One Hit Wonder, OP Schwert, Wasserwaage.
- Kategorien:
- Sammleritems: BDAY Schwert (mit Team-Signaturen), Sommersschwert, Wasserwaage.
- Utility-Schwerter: One Hit Wonder, Finstere Klinge (Oneclick-Effekt).
- High-End PvP/PvE: Schicksalssense, OP Schwert (+10 Herzen/Rüstung).
- Sammlerwert: Manche Items fehlen in /items oder im Wiki, werden aber noch gehandelt → selten und wertvoll für Langzeitspieler.

### Deine Pakete
- Sandkastenschaufel (Eff X, Haltb VIII, Mending) 2× aus Strand‑Promo.
- Gelbe Shulker als Event‑Pakete („Strandpaket“, „Gräber‑/Miner‑Rucksack“, „Bienen Paket“, „Licht & Leucht Paket“).
- Insgesamt 6 gelbe Shulker → 10 368 Items = 162 Stacks = 3 Doppelkisten (DCH) pro Run.

### Praxis‑Loops
- Mending richtig: XP‑Orbs nötig → zwischendurch Nether‑Quarz/Mobs/Ofen‑XP/Flaschen; beim Reparieren Rüstung mit Mending ausziehen.
- Zwei‑Schaufel‑Rotation: eine arbeitet, eine repariert.
- /fix oder Rang‑Reparaturen nutzen, falls vorhanden.

### Wichtige Features
- Skillpunkte über Crafting und Drops (Gold, Diamant, Kupfer + Kohle).
- Upgrades: mehr HP, Rüstung, Waffen, Fähigkeiten.
- Trigger/Advancements und Loot-Tables steuern die Punktevergabe.
- Multiplayer-tauglich, mehrsprachig, aktiv gepflegt vom Entwickler MonoCode.

### NoRisk und seine Troll-Verzauberungen
Parallel wurden viele Beispiele von NoRisk-Ideen gesammelt. Seine Enchantments sind oft Community-Wünsche, die er ins Absurde dreht.

### Mülleimer
- Beim Schleichen kann man Items direkt vernichten.
- Praktisch nur Troll, da man wertvolle Sachen unabsichtlich verlieren kann.

### Heiß
- Item kann nicht gehalten werden, weil es zu „heiß“ ist.
- Automatisch fällt es dem Spieler aus der Hand → unbrauchbar.

### Zweites Thema: Minecraft-Wirtschaft crashen
- In einem Video von Platin ging es weniger um die Wette, sondern um ein Experiment zur Serverwirtschaft.
- Er versucht, durch künstliche Preissteigerungen (z. B. Rüstung gegen mehr Smaragde) die Inflation anzuheizen.
- Platin hat sich dafür eine eigene Bank gebaut, inklusive Keller voller Smaragdblöcke und dekorativer Diamantrüstungen.
- Ziel: Den Wert der Smaragde künstlich zu manipulieren, indem er Knappheit und höhere Preise durchsetzt.

### Besondere Spitzhacken und Hacken
- JonCarrs Adminspitzhacke: Mit Effizienz X, Glück VII, Reparatur und Haltbarkeit X sowie Effekten wie x1,5 XP und Lava-Läufer. Ein Symbol für Effizienz und Kreativität.
- Owner Hacke: Extrem mächtig, mit Effizienz 15, Looting IV, Rückstoß V, Schärfe IV. Gibt +10 Herzen und +10 Rüstung.
- Will’s Bauhacke: Schärfe VIII, Rückstoß VI, Rüstung +6, Mob-Schild via Rechtsklick.
- Anubisspitzhacke: Mit Glück V und Effizienz X. Schreibfehler ("Anubis" mit Doppel-S) macht das Item besonders/unverwechselbar.
- Bedrockspitzhacke: Mit Rückstoß VIII, Schärfe VIII, Effekt: Bedrock beim Abbau erhalten, unzerstörbar. Absolutes High-End-Item.
- Endschaufel: Teil der Endkollektion, mit Effizienz VI und guter Balance aus Schaden und Geschwindigkeit.

### Überlegungen zu den Items
- Viele Items haben überstarke Verzauberungen, die weit über Vanilla-Werte hinausgehen.
- Items wie der Lavaschwamm-Effekt ermöglichen besondere Interaktionen mit Lava, wie deren sofortiges Entfernen.
- Der Wert von OP-Items kann im Milliardenbereich liegen, insbesondere bei Kombination mehrerer seltener Effekte.

### Drop-Mechaniken & XP
- XP wird teilweise live getrackt (z. B. durch Items mit XP-Bonus), während Geld alle 60 Sekunden berechnet wird.
- Items mit Schreibfehlern sind Sammelobjekte (z. B. Anubisspitzhacke).
- OP-Items sind häufig an den OP-Pass gebunden und dadurch limitiert im Umlauf.

### Wunsch-Ideen
- Eine Hacke mit Wasserschwamm-Effekt wäre ein spannendes Gegenstück zum Lavashaum.
- OP-Items mit ausbalancierten Spezialeffekten könnten gezielter in Rotation gebracht werden.
