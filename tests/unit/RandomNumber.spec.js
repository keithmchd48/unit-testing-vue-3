import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.find('span').element.textContent).toBe('0')
  })

  test('If button is clicked, randomNumber should be between 1 & 10', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('#generate').trigger('click')
    const randomNumber = +wrapper.find('span').element.textContent
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 100 & 200', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 100,
        max: 200,
      },
    })
    await wrapper.find('#generate').trigger('click')
    const randomNumber = +wrapper.find('span').element.textContent
    expect(randomNumber).toBeGreaterThanOrEqual(100)
    expect(randomNumber).toBeLessThanOrEqual(200)
  })
})
