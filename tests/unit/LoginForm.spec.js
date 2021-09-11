import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)
    // find text input
    const inputBox = wrapper.find('[data-testid="nameInput"]')
    // set value for text input
    inputBox.setValue('Keith Mac')
    // simulate form submission
    wrapper.trigger('submit')
    // assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    // assert payload is correct
    const expectedPayload = { name: 'Keith Mac' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
