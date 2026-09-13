import type {Metadata,Viewport} from "next";import "./globals.css";
export const metadata:Metadata={title:"词环 LexiLoop — 四六级背词提醒",description:"用科学间隔复习，在考试前记住每一个重要单词。",manifest:"/manifest.webmanifest",appleWebApp:{capable:true,title:"词环"}};
export const viewport:Viewport={themeColor:"#f4f2eb",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
