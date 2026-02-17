# Plano de Tarefas: VIVANT Odontologia

## 🟢 Fase 0: Inicialização e "Foundation"
- [x] Inicializar Memória do Projeto
- [x] **Decisões Arquiteturais**: 
    - 3D: Vídeo com Máscara (Option C)
    - CMS: JSON (Option A)
    - Integrações: Mocks
- [ ] **Setup Inicial**: Instalar Next.js 14, Tailwind, Framer Motion

## 🏗️ Fase 1: Implementação (Orchestration Mode)
### 🎨 Frontend (Agente: Frontend-Specialist)
- [x] **Setup Design System**: Configurar `globals.css` (Tailwind v4) com cores VIVANT.
- [x] **Componente Hero**: Criar `HeroVideoMask` (Vídeo bg + Texto Reveal).
- [x] **Layout Base**: Header (Logo Tipográfico), Footer.
- [x] **Páginas**: Integrar dados reais na Home e Tratamentos.

### 💾 Backend/Dados (Agente: Backend-Specialist)
- [x] **Camada de Dados**: Criar `data/treatments.json`, `data/doctors.json`.
- [x] **Mocks de API**: Criar `utils/mocks/*` para Calendar e Maps.
- [x] **API Routes**: Endpoints simples para ler os JSONs.

### 🧪 QA & Refinamento (Agente: Test-Engineer)
- [ ] **Testes Básicos**: Verificar build.
- [ ] **Auditoria**: Checar contrastes de cores.

## ⚡ Fase 2: Link (Conectividade)
- [ ] Implementar fluxo de formulário (Zod)
- [ ] Conectar formulário ao Mock de Agendamento

## ✨ Fase 3: Stylize (Polimento)
- [ ] Animações de Scroll (Framer Motion)
- [ ] Responsividade Fina
