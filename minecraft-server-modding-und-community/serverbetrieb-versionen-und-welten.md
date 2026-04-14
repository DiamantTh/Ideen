---
layout: default
title: Serverbetrieb, Versionen und Welten
---

[← Zurück zu Minecraft, Server, Modding und Community](../minecraft-server-modding-und-community.md) | [← Startseite](../index.md)

# Serverbetrieb, Versionen und Welten

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

### To‑Dos & Roadmap (nächste Schritte)
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

### Kontext der vorliegenden Inhalte
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
Die folgenden Ideen skizzieren, wie Microsoft oder Mojang ein stärkeres Compliance-System für Minecraft (vor allem Java Edition) aufbauen könnten. Betrachtet werden dabei die Rolle einzelner Entwickler, die Reaktion der Community sowie mögliche Zukunftsszenarien.

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
- Fokus: Verständnis der Architektur-Entwicklung (früher vs. heute), Realitäten für Serverbetrieb (Proxy/Version-Bridge), sowie kreative Nutzung von Dimensionen (Datapacks/Mods) und kuriosen Challenges.

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
Achtung: Resource‑ vs. Datapack‑Linien sind verschieden; unten steht bewusst der Fokus auf Ressourcenpacks, ergänzt um die „auffälligen“ Zahlen.
- Ressourcenpacks
- 1.20.5 (Pre‑Release‑Kontext): 32
- 1.21 / 1.21.1 (Release‑Kontext): 34
- 1.21.0 Pre 1–4: 46
- 1.21.4 (Server/Client): 46
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
Die von OPSucht angekündigte „Job Booster Woche“ bietet Anlass, Aktivitäten gezielt nach den tagesabhängigen Boosts zu planen. Jeden Tag ist ein anderer Job mit einem Bonus versehen. Freitag (Gräber), Samstag (Holzfäller) und Sonntag (Minenarbeiter) erweisen sich als die stärksten Tage.

Unter der Woche (Builder, Fischer, Jäger, Farmer) erkannte er zwar das Potenzial bestimmter Berufe, sah aber zugleich deren begrenzte Effizienz – insbesondere beim Builder, der sich eher für kreative Bauleute eignet als für Spieler mit Fokus auf Einkommen und Ressourcengewinn.

### Farmwelt und Materialbewertung
In der Farmwelt findet sich eine Zone mit rotem Sand und Terrakotta – ein günstiger Random-Spawn, der sich als „Mini-Jackpot“ erweist. Roter Sand zählt beim Gräberjob, während Terrakotta zusätzlich als wertvolles Baumaterial gesammelt werden kann.
Er erkannte den ökonomischen Vorteil, da sich hier gleich zwei Nutzen überschneiden: Geldgewinn durch den Job und langfristiger Materialwert für Projekte oder Handel.

Stöcke in der Wüste sind das nutzloseste Nebenprodukt – sie verstopfen Inventare, haben aber noch minimalen Nutzen als Brennstoff oder Notfallmaterial für Fackeln. Diese Abwägung zeigt ein klares Bewusstsein für Ressourcenwert und Spielökonomie.

### Fazit
Die OPSucht-Aktivitäten sind auf maximale Synergie ausgelegt. Mit Gräber-, Holzfäller- und Minenarbeiter-Jobs entsteht ein stabiles Fundament, das sowohl Einkommen als auch Materialien liefert. Die Farmwelt-Entdeckung mit rotem Sand und Keramik stärkt diese Strategie zusätzlich.

Er verfolgt damit einen strukturierten, nachhaltigen Spielstil, der Effizienz, Spaß und Planung vereint – ganz im Sinne eines Spielers, der seine Umgebung versteht und optimal nutzt.

### Überblick
Die strategische Nutzung der „Job Booster Woche“ auf dem Minecraft-Server OPSucht steht im Fokus. Analysiert wird, welche Jobs sich unter bestimmten Boosts am meisten lohnen und welche eher Zeitverschwendung darstellen. Besonders beachtet werden die Gräber-, Holzfäller- und Minenarbeiter-Jobs sowie Nebenfaktoren wie Farmwelt-Spawnbedingungen, Materialwert und Effizienz beim Ressourcenabbau.

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
- Eigenes Profil (beispielhaft):
- Keine klassische Berufserfahrung, aber viele Ideen und Konzepte.
- Arbeiten sollen unter freier Lizenz (CC-BY-SA) veröffentlicht werden.
- Arbeitszeit soll vergütet werden, ohne Exklusivrechte an Ideen abzutreten.

### Transparenz
- Gespräche und Ergebnisse sollen öffentlich dokumentiert werden.
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

---

[← Zurück zu Minecraft, Server, Modding und Community](../minecraft-server-modding-und-community.md) | [Startseite](../index.md)
