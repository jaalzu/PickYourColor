# 00 - Cómo usar estos documentos

## 🎯 Objetivo de esta guía

Explicarte **en qué orden leer** estos docs y **cómo trabajar** con ellos mientras desarrollás.

---

## 📚 Orden de lectura (primera vez)

### Antes de escribir código (1 hora de lectura)

1. **01-overview.md** (5 min)  
   → Para entender QUÉ estás construyendo

2. **02-scope.md** (5 min)  
   → Para saber qué NO vas a hacer (evita scope creep)

3. **09-roadmap.md** (10 min)  
   → Para ver las etapas completas del proyecto

4. **12-sprint-tracker.md** (5 min)  
   → Tu TODO list operativo (este es el que vas a usar TODO el tiempo)

5. **10-architecture.md** (15 min)  
   → Para entender cómo organizar el código

6. **04-data-and-state.md** (10 min)  
   → Para entender el shape del state en Zustand

### Durante el desarrollo (consulta bajo demanda)

No leas todo de una. Usá estos docs **cuando los necesites**:

- **03-features.md** → Cuando estés implementando un feature específico
- **05-user-flow.md** → Cuando tengas dudas de UX/comportamiento
- **06-undo-redo.md** → Cuando implementes undo/redo (Etapa 3)
- **07-accessibility.md** → Cuando implementes a11y (Etapa 5)
- **08-testing.md** → Cuando escribas tests (Etapa 6)
- **11-color-system.md** → Cuando implementes randomización (Etapa 2)

---

## 🛠️ Cómo trabajar con estos docs

### Tu flujo de trabajo diario

```
1. Abrís 12-sprint-tracker.md
   ↓
2. Ves en qué etapa estás
   ↓
3. Tachás la tarea que vas a hacer ahora
   ↓
4. Si tenés dudas, consultás el doc específico
   ↓
5. Codeás
   ↓
6. Commiteas
   ↓
7. Volvés al paso 1
```

### Ejemplo concreto

**Estás en Etapa 1, tarea: "Crear inputs de color"**

1. Abrís `12-sprint-tracker.md`
2. Marcás `[ ] Crear 5 inputs de color`
3. Tenés duda de cómo estructurar → abrís `10-architecture.md`
4. Ves que los inputs van en `/components/palette/ColorInput.tsx`
5. Tenés duda del shape del state → abrís `04-data-and-state.md`
6. Ves que el state tiene `palette.background`, etc.
7. Codeás el componente
8. Funcionó → tildás `[x] Crear 5 inputs de color` en el sprint tracker
9. Commit: `feat(palette): add color inputs`

---

## 📂 Dónde tener estos docs

### Opción 1: En el repo (recomendado)

```
realtime-colors/
├── docs/
│   ├── 00-how-to-use-these-docs.md
│   ├── 01-overview.md
│   ├── 02-scope.md
│   ├── ...
│   └── 12-sprint-tracker.md
├── src/
└── package.json
```

**Ventaja:** Todo versionado junto con el código.

### Opción 2: En Notion/Obsidian

Si preferís un sistema de notas, está bien.  
Pero el **sprint tracker** tiene que estar accesible TODO el tiempo.

---

## 🎯 Qué documento usar en cada situación

| Situación | Doc a consultar |
|-----------|----------------|
| "¿Qué hago ahora?" | `12-sprint-tracker.md` |
| "¿Esto entra en el scope?" | `02-scope.md` |
| "¿Cómo debería funcionar X?" | `03-features.md` o `05-user-flow.md` |
| "¿Dónde pongo este archivo?" | `10-architecture.md` |
| "¿Qué shape tiene el state?" | `04-data-and-state.md` |
| "¿Cómo implemento undo/redo?" | `06-undo-redo.md` |
| "¿Cómo calculo contrast ratio?" | `11-color-system.md` |
| "¿Qué testear?" | `08-testing.md` |
| "¿Cómo hago esto accesible?" | `07-accessibility.md` |
| "¿Cuánto tiempo me falta?" | `09-roadmap.md` |

---

## ✅ Checklist de setup inicial

Antes de empezar a codear, hacé esto:

- [ ] Crear carpeta `/docs` en tu repo
- [ ] Copiar todos estos `.md` ahí
- [ ] Leer `01-overview.md` (5 min)
- [ ] Leer `02-scope.md` (5 min)
- [ ] Leer `09-roadmap.md` (10 min)
- [ ] Leer `10-architecture.md` (15 min)
- [ ] Abrir `12-sprint-tracker.md` en una pestaña fija
- [ ] Commitear: `docs: add project documentation`

---

## 🔄 Mantener los docs actualizados

### Qué actualizar mientras trabajás

**SÍ actualizar:**
- ✅ `12-sprint-tracker.md` → tachá tareas constantemente
- ✅ `02-scope.md` → si decidís cambiar algo del scope

**NO actualizar (son estáticos):**
- ❌ `01-overview.md`
- ❌ `03-features.md`
- ❌ `04-data-and-state.md`
- ❌ `05-user-flow.md`
- ❌ `06-undo-redo.md`
- ❌ `07-accessibility.md`
- ❌ `08-testing.md`
- ❌ `09-roadmap.md`
- ❌ `10-architecture.md`
- ❌ `11-color-system.md`

Si encontrás un error o algo confuso, podés editarlo, pero **no cambies las decisiones core** sin actualizar el sprint tracker.

---

## 💡 Tips para no perderte

### Tip 1: Un doc a la vez
No intentes leer todo junto. Trabajá **por etapa**.

### Tip 2: El sprint tracker es tu single source of truth
Si no está en el sprint tracker, no lo hagas.

### Tip 3: No actualices docs "por las dudas"
Solo actualizá si hay un cambio real en el proyecto.

### Tip 4: Commitea después de cada tarea
Así podés volver atrás si te trabás.

### Tip 5: No te obsesiones con la perfección
Estos docs son una guía, no una biblia. Si algo no tiene sentido, cambialo.

---

## 🚀 Workflow resumido

```
┌─────────────────────────────────────┐
│  1. Abrir 12-sprint-tracker.md      │
│  2. Ver próxima tarea sin tildar    │
│  3. Si tengo dudas → consultar doc  │
│  4. Codear                          │
│  5. Tildar tarea                    │
│  6. Commit                          │
│  7. Repetir                         │
└─────────────────────────────────────┘
```

---

## ❓ Preguntas frecuentes

### ¿Tengo que leer todo antes de empezar?
No. Solo lee `01`, `02`, `09`, `10` y `12`. El resto, bajo demanda.

### ¿Qué pasa si cambio de opinión sobre algo?
Actualizá `02-scope.md` y `12-sprint-tracker.md`. El resto puede quedar.

### ¿Puedo saltear etapas del roadmap?
No. Cada etapa depende de la anterior.

### ¿Puedo agregar features que no están en el scope?
Solo si actualizás `02-scope.md` y agregás tareas en `12-sprint-tracker.md`.

### ¿Cada cuánto commiteo?
Después de cada tarea completada (cada checkbox tildado).

---

## 📌 Lo más importante

**El documento que vas a usar TODO el tiempo es:**

→ `12-sprint-tracker.md` ←

**El resto son de consulta.**

Si solo podés tener un doc abierto, que sea ese.