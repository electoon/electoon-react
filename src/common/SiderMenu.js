import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
	ExperimentOutlined,
	DesktopOutlined,
	GithubOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = ({ currMenuNo, selMenuEvent, menuList }) => {
	const [collapsed, setCollapsed] = useState(false);

	const [logoStyle, setLogoStyle] = useState({
		style: {
			height: "32px",
			marginTop: "22px",
			marginLeft: "22px",
			color: "#fff",
			transition: "margin 0.29s",
		},
	});

	const [titleVisibility, setTitleVisibility] = useState({
		style: {
			wordBreak: "keep-all",
			opacity: 100,
			transition:
				"opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s, color 0.3s",
		},
	});

	const onCollapse = () => {
		logoStyle.style = {
			height: !collapsed ? "34px" : "32px",
			marginTop: !collapsed ? "22px" : "24px",
			marginLeft: !collapsed ? "31px" : "22px",
			color: "#fff",
			transition: !collapsed ? "margin 0.29s" : "margin 0.29s",
		};

		titleVisibility.style = {
			wordBreak: "keep-all",
			opacity: !collapsed ? 0 : 100,
			transition:
				"opacity 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s, color 0.3s",
		};

		setCollapsed(!collapsed);
	};

	const [menuItems, setMenuItems] = useState(undefined);

	const renderSiderMenu = () => {
		let tempMenuItem = [];

		menuList.map((item, index) => {
			if (!item.subMenu) {
				tempMenuItem = tempMenuItem.concat(
					<Menu.Item
						key={item.menuCode}
						icon={<GithubOutlined />}
						onClick={() => selMenuEvent(item.menuCode)}
					>
						{item.menuName}
					</Menu.Item>
				);
			} else {
				let tempSubMenuItems = [];

				item.subMenu.map((subItem, subIndex) => {
					tempSubMenuItems = tempSubMenuItems.concat(
						<Menu.Item
							key={`subMenuItem${index}${subIndex}${subItem.menuCode}`}
							onClick={() => selMenuEvent(subItem.menuCode)}
						>
							{subItem.menuName}
						</Menu.Item>
					);
				});

				tempMenuItem = tempMenuItem.concat(
					<SubMenu
						key={`subMenu${index}`}
						icon={<UserOutlined />}
						title={item.menuName}
						children={tempSubMenuItems}
					/>
				);
			}
		});

		setMenuItems(tempMenuItem);
	};

	useState(() => {
		renderSiderMenu();
	}, menuList);

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div {...logoStyle}>
				<ExperimentOutlined
					style={{
						color: "#fff",
						fontSize: "150%",
					}}
					size='large'
					title='실험실'
				/>
				<span {...titleVisibility}>&nbsp;실험실</span>
			</div>
			<Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
				{menuItems}
			</Menu>
		</Sider>
	);
};

export default SiderMenu;
