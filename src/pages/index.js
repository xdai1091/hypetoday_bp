import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Hr, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaCloudDownloadAlt } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Section padding="40px 0 40px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
			/>
			<Box
				empty-border-color="LightGray"
				width="30%"
				align-items="center"
				lg-width="50%"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				sm-width="70%"
				empty-min-width="64px"
				empty-border-width="1px"
			>
				<Text color="--light" margin="0px 0px 0px 0px" font="--headline3">
					HYPETODAY
				</Text>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Text
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				font="--headline1"
				md-text-align="center"
			>
				欢迎下载
				<br />
				Hypetoday的商业企划案
			</Text>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					empty-min-height="64px"
					display="flex"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
					<Icon
						category="fa"
						icon={FaCloudDownloadAlt}
						size="64px"
						color="#ffffff"
						margin="0px 0px 0px 50px"
						width="40px"
						height="40px"
					/>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					display="grid"
					justify-content="center"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					width="20%"
					sm-justify-content="flex-start"
				>
					<Text
						font="normal 600 18px/1.5 --fontFamily-googleInter"
						color="--light"
						margin="0px 0px 0px 0px"
						display="flex"
						align-self="auto"
						order="-1"
						justify-self="start"
						height="60px"
					>
						中文版本
						<br />
						2021年五月
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					width="60%"
				>
					<Text
						font="--headline4"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
					>
						Hypetoday为运动领队提供技术支持与服务
						<br />
						<br />
						一、完美的客户体验
						<br />
						二、实时的流量分析
						<br />
						三、机器学习赋能
						<br />
						四、提高品牌知名度
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				flex-wrap="wrap"
				sm-margin="32px 0px 0px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				margin="86px 0px 0px 0px"
				sm-flex-direction="column"
			>
				<Box
					display="flex"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Hr width="100%" color="--light" />
					<Icon
						category="fa"
						icon={FaCloudDownloadAlt}
						size="64px"
						color="#ffffff"
						margin="0px 0px 0px 50px"
						width="40px"
						height="40px"
					/>
				</Box>
				<Box
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					justify-content="center"
					empty-border-style="solid"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					display="inline-block"
					flex="0 1 auto"
					text-align="center"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px" position="static">
						English Version
						<br />
						February, 2022
					</Text>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-height="64px"
					empty-border-style="solid"
					width="60%"
					sm-width="100%"
					empty-min-width="64px"
				>
					<Text font="--headline4" color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter">
						We are looking to be the Shopify of the fitness leader industry by providing:
						<br />
						<br />
						1. Seamless Customer Experience
						<br />
						2. Real-time Traffic Analysis
						<br />
						3. Leverage Machine Learning
						<br />
						4. Boost Reputation and Brand Recognition
						<br />
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 90px 0" sm-padding="74px 0 74px 0" quarkly-title="Footer">
			<Override slot="SectionContent" md-align-items="center" flex-direction="row" md-flex-direction="column" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				md-justify-content="center"
				md-align-items="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
					代星驰
				</Text>
			</Box>
			<Box
				md-padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-justify-content="center"
				empty-min-height="64px"
				empty-border-color="LightGray"
				md-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
				>
					xingchi.dai@guizhouxy.com
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				width="33.333%"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				display="flex"
				md-align-items="center"
				align-self="flex-start"
				text-align="left"
				flex="1 1 0%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
				>
					2655 Prosperity Ave
					<br />
					VA 22031
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});