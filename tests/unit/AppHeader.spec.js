import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show the Logout button', () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: false })
    expect(wrapper.find('#btn-logout').isVisible()).toBe(false)
  })

  test('If user is logged in, show the Logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    // await wrapper.vm.$nextTick()
    expect(wrapper.find('#btn-logout').isVisible()).toBe(true)
  })
})
