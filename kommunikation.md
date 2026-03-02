---
layout: default
title: Kommunikation in Open Source
---

# Kommunikation im Open-Source-Kontext

[← Zurück zur Startseite](index.html)

## Das Kommunikations-Paradox

Open-Source-Projekte sind **globale, kollaborative Bemühungen** – aber die Kommunikation findet fast ausschließlich auf Englisch statt. Warum ist das so? Ist das gut? Und was passiert, wenn man davon abweicht?

Diese Seite untersucht Kommunikationsmuster in Open-Source-Projekten und die oft überraschenden Reaktionen auf verschiedene Kommunikationsstile.

## Das Experiment: Mehrsprachige Feature-Requests

### Die Idee

Was passiert, wenn man einen **Feature-Request in mehreren Sprachen** gleichzeitig schreibt? Eine Art linguistisches Feuerwerk:

```markdown
Hello everyone, ich würde gerne WebAuthN support sehen, porque es muy importante.
En mi empresa usamos soluciones modernas, et l'authentification sans mot de passe 
devient la norme...
```

### Die Realität

**Entwickler-Reaktionen:**

1. **Der Locker-Gutgelaunte**: 😂 "Is this a language test or a feature request?"
2. **Der Pragmatiker**: "Can someone summarize this in English?"
3. **Der Sprachbegabte**: Hilft beim Übersetzen und findet es amüsant
4. **Das Team**: Speichert den Issue als Meme im internen Chat

### Die Lehre

**Mehrsprachige Issues wirken:**
- Verwirrend und überladen
- Wie ein Gag statt ernsthafter Anfrage
- Respektlos gegenüber der Zeit der Entwickler

**Aber warum?**

## Warum Englisch der Standard ist

### Praktische Gründe

1. **Reichweite**: Fast alle Entwickler verstehen Englisch
2. **Archivierung**: Zukünftige Mitwirkende können Issues verstehen
3. **Effizienz**: Eine Sprache = Eine Diskussion, keine parallelen Threads
4. **Tooling**: Issue-Tracker, CI/CD, Dokumentations-Tools sind auf Englisch

### Philosophische Gründe

Open Source basiert auf **Meritokratie** (theoretisch zumindest):
- Die beste Idee soll gewinnen
- Nicht die am schönsten formulierte
- Nicht die in der "richtigen" Sprache

**Englisch ist der kleinste gemeinsame Nenner**, nicht weil es besser ist, sondern weil es am weitesten verbreitet ist.

## Der Stil macht die Musik

### Juristensprache vs. Lockerer Ton

**Juristensprache/Behördendeutsch:**
```
Hiermit beantrage ich gemäß § 4 Abs. 2 der Projektrichtlinien die Implementation 
einer Authentifizierungsfunktionalität unter Berücksichtigung der WebAuthN-Spezifikation
(W3C Recommendation vom 4. März 2019) zwecks Erhöhung der Sicherheit...
```

**Reaktion:** 😴 "TL;DR please"

**Lockerer Open-Source-Stil:**
```
Hey! Would be great to have WebAuthN support. It's W3C standard, all browsers 
support it, and it would make login much more secure. Happy to help test!
```

**Reaktion:** 👍 "Sounds good, let's discuss implementation details"

### Warum Lockerheit gewinnt

**In der Open-Source-Welt gilt:**
1. **Zeit ist wertvoll**: Entwickler machen das oft in ihrer Freizeit
2. **Direktheit wird geschätzt**: Keine Floskeln, keine Umschweife
3. **Humor ist willkommen**: Lockert die Atmosphäre auf
4. **Respekt durch Klarheit**: Wer verständlich kommuniziert, respektiert die Zeit anderer

**Aber Achtung:**
- Lockerheit ≠ Respektlosigkeit
- Humor ≠ Unseriösität
- Direkt ≠ Unhöflich

## Die Balance finden

### Empfohlene Struktur für Feature-Requests

```markdown
### Problem
[Was funktioniert nicht oder fehlt?]

### Proposed Solution
[Was schlägst du vor?]

### Alternatives Considered
[Welche anderen Lösungen gibt es?]

### Additional Context
[Weitere Infos, Screenshots, Links]
```

**Warum diese Struktur?**
- **Klar und strukturiert**: Entwickler können schnell einschätzen
- **Vollständig**: Alle wichtigen Infos sind da
- **Diskussionsfreundlich**: Leicht zu kommentieren

### Sprachtipps

**DO:**
- ✅ Schreib in einfachem Englisch
- ✅ Nutze Fachbegriffe korrekt
- ✅ Verlinke relevante Specs/Dokumentation
- ✅ Sei freundlich und respektvoll

**DON'T:**
- ❌ Mehrere Sprachen in einem Issue
- ❌ Juristensprache oder Behördendeutsch
- ❌ Ellenlange Prosa ohne Struktur
- ❌ Forderungen statt höflicher Bitten

## Warum ist das wichtig?

### Open Source lebt von Kommunikation

**Gute Kommunikation führt zu:**
- Schnellerer Umsetzung von Features
- Weniger Missverständnissen
- Besserer Community-Atmosphäre
- Mehr Mitwirkenden

**Schlechte Kommunikation führt zu:**
- Ignorierten Issues
- Frustrierten Entwicklern
- Spaltung der Community
- Weniger Innovation

### Kulturelle Unterschiede

**Deutsche Entwickler** neigen zu:
- Präzision und Ausführlichkeit
- Formellerer Sprache
- Skepsis gegenüber "zu lockerem" Ton

**US/UK-Entwickler** erwarten:
- Kürze und Direktheit
- Lockeren, freundlichen Ton
- "Get to the point" Mentalität

**Das beste aus beiden Welten:**
- Präzise, aber nicht übertrieben formal
- Freundlich, aber nicht oberflächlich
- Strukturiert, aber nicht bürokratisch

## Das Überkorrektheits-Problem

### Was ist Überkorektheit?

**Definition:** So formal, präzise und "korrekt" zu sein, dass es kontraproduktiv wird.

**Beispiel:**
```
Sehr geehrte Damen und Herren des Entwicklerteams,

gestatten Sie mir, höflich anzufragen, ob es möglicherweise in Erwägung gezogen 
werden könnte, eine Implementierung der WebAuthN-Spezifikation...
```

**Reaktion:** "Is this person OK? Just tell us what you want!"

### Warum passiert das?

**Deutsche Kulturprägung:**
- Höflichkeit wird durch Formalität ausgedrückt
- Direktheit kann als unhöflich empfunden werden
- Präzision wird hochgeschätzt

**Open-Source-Kultur (meist US-geprägt):**
- Höflichkeit durch Freundlichkeit, nicht Formalität
- Direktheit ist Respekt (spart Zeit)
- Präzision ja, aber nicht um jeden Preis

### Die Lösung

**"Professional Casual"** – der goldene Mittelweg:
- Respektvoll, aber nicht steif
- Klar, aber nicht barsch
- Präzise, aber nicht pedantisch

## Praktische Beispiele

### Beispiel 1: Bug Report

**❌ Überkorekt:**
```
Hiermit melde ich einen Fehler im System. Nach eingehender Analyse konnte ich 
feststellen, dass unter bestimmten, näher zu spezifizierenden Umständen...
```

**✅ Professional Casual:**
```
Found a bug: The login form doesn't work on mobile Safari.

Steps to reproduce:
1. Open site on iPhone 13, iOS 16
2. Try to login
3. Form freezes

Expected: Login works
Actual: Form unresponsive
```

### Beispiel 2: Feature Request

**❌ Zu locker:**
```
yo, u should totally add dark mode, would be lit af 🔥🔥🔥
```

**✅ Professional Casual:**
```
Feature Request: Dark Mode

Would love to see a dark mode option. Many users work at night, and it would 
reduce eye strain. Most modern apps have this feature now.

Happy to contribute if you point me to the right files!
```

## Mehrsprachigkeit sinnvoll nutzen

### Wann sind mehrere Sprachen OK?

1. **Separate Übersetzungen**: 
   - Haupttext auf Englisch
   - Link zu Übersetzungen in anderen Sprachen

2. **Lokalisierungs-Issues**:
   - Feature-Requests für Sprachunterstützung

3. **Community-Building**:
   - Channels für nicht-englischsprachige Nutzer

### Die WebAuthN-FR01 Datei

Die Datei `texts/funny/webauthn-fr01.txt` ist ein **satirisches Beispiel**:

```
Hallo zusammen, I would really like to see WebAuthN support, weil das ist 
heutzutage wirklich wichtig. En mi empresa usamos muchas soluciones modernas...
```

**Der Zweck:** Zeigen, wie **nicht** zu kommunizieren ist – und gleichzeitig die Absurdität von übertriebener Mehrsprachigkeit aufzeigen.

## Fazit

**Die drei goldenen Regeln:**

1. **Klar und strukturiert**: Mach es Entwicklern leicht, dich zu verstehen
2. **Freundlich und respektvoll**: Ton matters
3. **Englisch als Standard**: Für maximale Reichweite

**Und denk daran:**
> In Open Source zählt der Code mehr als die Worte. Aber gute Worte führen zu besserem Code.

## Weiterführende Dokumente

- [2025-05-28-issue-kommunikation-open-source.json](https://github.com/DiamantTh/Ideen/blob/main/json/2025-05-28-issue-kommunikation-open-source.json) – Detaillierte Analyse
- [texts/funny/webauthn-fr01.txt](https://github.com/DiamantTh/Ideen/blob/main/texts/funny/webauthn-fr01.txt) – Das satirische Beispiel

---

[← Zurück zur Startseite](index.html) | [GitHub Repository](https://github.com/DiamantTh/Ideen)
