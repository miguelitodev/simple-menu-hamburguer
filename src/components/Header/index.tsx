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
	Link,
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
							<TextContent>Conteúdo</TextContent>
						</Content>
					</ContainerContent>
				</>
			) : (
				<>
					<Menu>
						<ListMenu>
							<OptionMenu>
								<Link>Home</Link>
							</OptionMenu>
							<OptionMenu>
								<Link>Perfil</Link>
							</OptionMenu>
							<OptionMenu>
								<Link>Sobre</Link> nós
							</OptionMenu>
							<OptionMenu>
								<Link>Contato</Link>
							</OptionMenu>
						</ListMenu>
					</Menu>
				</>
			)}
		</>
	);
};

export default Header;
