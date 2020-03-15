import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
    test('If user if not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader)
        expect(wrapper.find('button').isVisible()).toBe(false);
    })

    test('If user is logged in, do not show logout button', async () => {
        const wrapper = mount(AppHeader)
        expect(wrapper.vm.loggedIn).toBe(false);
        wrapper.setData({ loggedIn: true })
        expect(wrapper.vm.loggedIn).toBe(true);
        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true);
    })
})