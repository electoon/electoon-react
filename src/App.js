import React, { Fragment, useState } from "react";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";

import SiderMenu from "./common/SiderMenu.js";

const { Header, Content, Footer } = Layout;

const App = () => {
	const [currMenuNo, setCurrMenuNo] = useState(0);

	const [navProps, setNavProps] = useState({
		title: "웅캬캬캬",
		breadcrumb: ["Life", "Day"],
	});

	const [menuList, setMenuList] = useState([
		{
			menuCode: 0,
			menuName: "메뉴0",
			subMenu: undefined,
		},
		{
			menuCode: 1,
			menuName: "메뉴1",
			subMenu: undefined,
		},
		{
			menuCode: 2,
			menuName: "메뉴2",
			subMenu: [
				{ menuCode: 21, menuName: "서브메뉴21" },
				{ menuCode: 22, menuName: "서브메뉴22" },
			],
		},
		{
			menuCode: 3,
			menuName: "메뉴3",
			subMenu: undefined,
		},
	]);

	const breadcrumbList = navProps.breadcrumb.map((item, index) => {
		return (
			<Breadcrumb.Item
				key={`breadCrumbItem-${index}`}
				onClick={() => console.log(`${item} clicked`)}
			>
				{item}
			</Breadcrumb.Item>
		);
	});

	const selMenuEvent = (val) => {
		console.log(val);
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<SiderMenu
				currMenuNo={currMenuNo}
				selMenuEvent={selMenuEvent}
				menuList={menuList}
			/>
			<Layout style={{ background: "#fff" }}>
				<Header style={{ background: "#fff", paddingLeft: 24 }}>
					<h1>웅캬캬캬</h1>
				</Header>
				<Content style={{ margin: "0 16px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						{breadcrumbList}
					</Breadcrumb>
					<div
						style={{
							background: "#fff",
							padding: 24,
							minHeight: 360,
						}}
					>
						뭘 좀 해볼까...
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>안녕</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
