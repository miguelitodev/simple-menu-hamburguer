import styled from "styled-components";

export const ContainerMenu = styled.div`
	background: #393c43;
	padding: 15px 0px;
	width: 100%;
`;

export const ContainerContent = styled.div``;

export const Wrapper = styled.div`
	width: 1250px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Logo = styled.img.attrs({
	src: "https://liga-dos-programadores.github.io/src/img/logo_liga.svg",
})`
	width: 32px;
	height: 32px;
	object-fit: cover;
`;

export const IconMenu = styled.img.attrs({
	src: "https://images.emojiterra.com/twitter/512px/1f354.png",
})`
	width: 32px;
	height: 32px;
	object-fit: cover;
	cursor: pointer;
`;

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	background: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextContent = styled.h1`
	font-size: 70px;
	font-family: "Roboto", sans-serif;
`;

export const ButtonMenu = styled.a``;

export const Menu = styled.div`
	width: 100%;
	height: 100vh;
	background: #393c43;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ListMenu = styled.ul`
	list-style: none;
`;

export const OptionMenu = styled.li`
	margin: 10px 0px;
	font-family: "Roboto", sans-serif;
	color: #fff;
	font-size: 30px;
`;
