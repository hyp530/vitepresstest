# Do not use button in popover

This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.
<n-popover trigger="hover"><template #trigger><n-button>This is a built-in button in Popover, so it cannot be used as part of text. It would be a problem when the text in button is long. Don't use button in popover.</n-button></template><span>Arco design has a better solution for your reference: https://arco.design/vue/component/popover</span></n-popover>

<n-popover trigger="hover" class="mb-0 max-w-64 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl" header-class="px-2 py-1 font-bold bg-gray-300 dark:bg-gray-500" content-class="px-2 pt-1"><template #trigger><n-button class="h-auto px-0 leading-6 select-text bg-slate-200 dark:bg-slate-400" :theme-overrides="{border: 'none', borderHover: 'none'}">This is a built-in button in Popover, so it cannot be used as part of text. It would be a problem when the text in button is long.Don't use button in popover.</n-button></template><span>Arco design has a better solution for your reference: https://arco.design/vue/component/popover</span></n-popover>

Arco design popover: https://arco.design/vue/component/popover