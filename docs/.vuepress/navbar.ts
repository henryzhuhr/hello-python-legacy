import type { NavbarConfig } from '@vuepress/theme-default'

export const __navbar: NavbarConfig = [
    {
        text: '自带库',
        children: [
            {
                text: 'argparse',
                link: '/pythonlib/argparse/argparse.md',
                activeMatch: '/pythonlib/argparse/',
            },
            {
                text: 'collections',
                link: '/pythonlib/collections/collections.md',
                activeMatch: '/pythonlib/collections/',
            },
        ],
    },
    {
        text: '第三方库',
        children: [
            {
                text: 'tqdm',
                link: '/3rdpatry/tqdm/tqdm.md',
                activeMatch: '/3rdpatry/tqdm/',
            },
            {
                text: 'pytest',
                link: '/3rdpatry/pytest/pytest.md',
                activeMatch: '/3rdpatry/pytest/',
            },
        ],
    }
]