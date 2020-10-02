import React from "react";

import {
	ContainerMenu,
	Wrapper,
	Logo,
	IconMenu,
	Content,
	TextContent,
	ContainerContent,
	ButtonMenu,
	Menu,
	ListMenu,
	OptionMenu,
} from "./styles";

const Header: React.FC = () => {
	const [showContent, setShowContent] = React.useState<boolean>(true);

	function handleMenu() {
		if (showContent) {
			setShowContent(false);
		} else {
			setShowContent(true);
		}
	}

	return (
		<>
			<ContainerMenu>
				<Wrapper>
					<Logo />
					<ButtonMenu onClick={handleMenu}>
						<IconMenu />
					</ButtonMenu>
				</Wrapper>
			</ContainerMenu>
			{showContent ? (
				<>
					<ContainerContent>
						<Content>
							<TextContent>Opa</TextContent>
						</Content>
					</ContainerContent>
				</>
			) : (
				<>
					<Menu>
						<ListMenu>
							<OptionMenu>Home</OptionMenu>
							<OptionMenu>Perfil</OptionMenu>
							<OptionMenu>Sobre nós</OptionMenu>
							<OptionMenu>Contato</OptionMenu>
						</ListMenu>
					</Menu>
				</>
			)}
		</>
	);
};

export default Header;
