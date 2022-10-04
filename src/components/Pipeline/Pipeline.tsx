import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useAppStore } from "../../store/context";


const menu = (onClick: any) => (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: "All",
                    key: '0',
                },
                {
                    label: "Sales",
                    key: '1',
                },
                {
                    label: "Marketing",
                    key: '2',
                },
                {
                    label: "Partners",
                    key: '3',
                },
            ]}
        />
    );


export default function PipeLine() {
    const { setPipeline } = useAppStore();

    const handleClick = (e: any) => {
        return setPipeline(e.key);
    }

    return (
        <Dropdown overlay={() => menu(handleClick)} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    All Pipelines
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}