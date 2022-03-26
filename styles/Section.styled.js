import styled from "styled-components";
import { MediaQueries} from "./MediaQueries.js"
let equalMargin = "40px"


export const StyledSection = styled.div`
	width:100%; height:100%;
	@media (max-width:${MediaQueries.xxxLargeDevices}) {
		padding:10% 40px 40px;
	}
	@media (max-width:${MediaQueries.mediumDevices}) {
		padding:120px 20px 40px;
	}
	.img-box-main {
		display	:flex;
		margin-bottom:${equalMargin};
		@media (max-width:${MediaQueries.mediumDevices}) {
			flex-direction:column;
		}
		.left {
			margin-right:${equalMargin};
			.img-box {
				&:first-child {
					margin-bottom:${equalMargin};
				}
				@media (max-width:${MediaQueries.mediumDevices}) {
					margin-bottom:${equalMargin};
				}
			}
			@media (max-width:${MediaQueries.mediumDevices}) {
				margin-right:0;
			}
		}
		.row {
			display:flex;
			.img-box {
				margin-right:${equalMargin};
				&:last-child{
					margin-right:0;
				}
		   }
			 
		}
	}
	.img-box-full {
		margin-bottom:${equalMargin};
	}
	.row {
		@media (max-width:${MediaQueries.xxLargeDevices}) {
			flex-direction:column;
		}
	}
	.col-half {
		padding:10% 5% 15% 10%;
		&:last-child {
			padding:10% 15% 10% 5%;
			@media (max-width:${MediaQueries.xxxLargeDevices}) {
			padding:5% 10% 5% 2.5%;
		}
		}
		@media (max-width:${MediaQueries.xxxLargeDevices}) {
			width:100%;
			padding:5% 2.5% 5% 10%;
		}
		&.images {
			@media (max-width:${MediaQueries.xxLargeDevices}) {
				display:flex; flex-direction:column; align-items:center;;
			}
			@media (max-width:${MediaQueries.mediumDevices}) {
				margin-bottom:${equalMargin};
				padding:5%;
			}
		}
	}
	@media (max-width:${MediaQueries.smallDevices}) {
	   img {
		   width:100%;
		}
	}
`