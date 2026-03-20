export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules: Record<string, string> = {}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  'antfu': {
    source: 'https://github.com/antfu/skills',
    skills: {
      unocss: 'unocss',
      vite: 'vite',
      vitepress: 'vitepress',
      pnpm: 'pnpm',
      vitest: 'vitest',
      vue: 'vue',
      pinia: 'pinia',
    },
  },
  'vuejs-ai': {
    source: 'https://github.com/vuejs-ai/skills',
    skills: {
      'vue-best-practices': 'vue-best-practices',
      'vue-router-best-practices': 'vue-router-best-practices',
      'vue-testing-best-practices': 'vue-testing-best-practices',
    },
  },
  'vueuse': {
    official: true,
    source: 'https://github.com/vueuse/vueuse',
    skills: {
      'vueuse-functions': 'vueuse-functions',
    },
  },
}

/**
 * Hand-written skills with Yu's preferences/tastes/recommendations
 */
export const manual = [
  'yu',
]
