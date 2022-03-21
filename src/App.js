import React, { Fragment, useState } from "react";
import { Layout, Breadcrumb, Table, Button } from "antd";
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

	const colHeader = [
		{
			title : '번호',
			dataIndex : 'no',
			key : 'no',
			sorter : (a, b) => a.no - b.no
		},
		{
			title : '이름',
			dataIndex : 'name',
			key : 'name',
			sorter: (a, b) => a.name.localeCompare(b.name)
		}
	];

	const [colData, setColData] = useState([
		{
			no : 1,
			name : '김길동'
		},
		{
			no : 2,
			name : '고길동'
		},
		{
			no : 3,
			name : '공길동'
		},
		{
			no : 4,
			name : '홍길동'
		}
	]);

	const selMenuEvent = (val) => {
		if (val) {
			let currMenu = [val];
			console.log(currMenu);
			setCurrMenuNo(currMenu);
		}
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
						<Table columns={colHeader} dataSource={colData} />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>안녕</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
