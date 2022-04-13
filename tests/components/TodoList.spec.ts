import { shallowMount } from '@vue/test-utils'
import { describe, it, vi, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing' 
import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

import TodoList from '@/components/TodoList.vue'

describe('<TodoList />', () => {
  it('can add a task', () => {
    //* arrange
    const wrapper = shallowMount(TodoList, { 
      global: { 
        plugins: [
          createI18n({
            locale: 'en',
            messages
          }),
          createTestingPinia({ createSpy: vi.fn })
        ]
      } 
    })

    //* act
    wrapper.vm.newTask.title = 'task'
    wrapper.vm.addNewTask()

    //* assert
    expect(wrapper.vm.todos).to.have.length(1)
  })
})