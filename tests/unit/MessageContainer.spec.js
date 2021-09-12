import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  test('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: `<p data-testid="message">Hello from the db!</p>`,
          },
        },
      },
    })
    const messageDisplayed = wrapper.find('[data-testid="message"]').element
      .textContent
    expect(messageDisplayed).toBe('Hello from the db!')
  })
})
