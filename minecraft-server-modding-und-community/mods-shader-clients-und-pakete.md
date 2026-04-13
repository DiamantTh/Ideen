---
layout: default
title: Mods, Shader, Clients und Pakete
---

[← Zurück zu Minecraft, Server, Modding und Community](../minecraft-server-modding-und-community.md) | [← Startseite](../index.md)

# Mods, Shader, Clients und Pakete

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

---

[← Zurück zu Minecraft, Server, Modding und Community](../minecraft-server-modding-und-community.md) | [Startseite](../index.md)
