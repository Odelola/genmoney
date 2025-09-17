import { SearchIcon } from '@/assets/svgs'
import { IconImageRender } from '../icons/IconImageRender'
import { Input, Space } from 'antd'

export function SearchInput() {
    return (
        <Space>
            <Input
                type='search'
                prefix={<IconImageRender priority renderIcon={SearchIcon} alt='Search Icon' />}
                className='!rounded-e-sm rounded-lg !bg-white-200 !border-0 focus:!border-primary !w-[250px] [&>input]:!placeholder-grey-700'
                // className='!rounded-e-sm rounded-lg focus:!border-primary hover:!border-transparent focus-visible:!ring-red-500 focus-visible:!ring-offset-0 [&>input]:!placeholder-grey-700 [&>input]:!ml-2 justify-between !w-[250px]'
                placeholder="Search"
                variant="filled" />
        </Space>
    )
}