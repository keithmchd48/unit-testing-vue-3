// json-server, axios & flush-promises npm packages were installed for the purpose of this spec

import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  test('calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!'
    // mock api call resolve
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toBe(mockMessage)
  })

  test('Display error message when getMessage api call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    // mock api call reject
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const errorDisplayed = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(errorDisplayed).toBe(mockError)
  })
})
