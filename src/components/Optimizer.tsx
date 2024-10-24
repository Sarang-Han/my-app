'use client'

import React, { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchComponent from './advanced-search';

import { 
  Twitter, 
  Instagram, 
  PlusCircle, 
  Search, 
  Settings, 
  ChevronDown,
  BookmarkPlus,
  Share2
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// 샘플 데이터
const connectedAccounts = [
  { id: 1, name: 'Twitter', icon: Twitter },
  { id: 2, name: 'Instagram', icon: Instagram },
]

const subscriptions = [
  { id: 1, name: '테크 뉴스', icon: '🖥️', platform: 'Twitter' },
  { id: 2, name: '여행 블로거', icon: '✈️', platform: 'Instagram' },
  { id: 3, name: '요리 레시피', icon: '🍳', platform: 'Twitter' },
]

const posts = [
  { 
    id: 1, 
    source: '테크 인사이더',
    title: 'GPT-4의 혁신적 발전: AI 기술의 새로운 지평',
    summary: '최신 AI 모델 GPT-4가 이전 버전을 크게 뛰어넘는 성능을 보여주며 다양한 분야에서 혁신을 일으키고 있습니다. 자연어 처리부터 코드 생성까지, GPT-4의 능력은 우리의 상상을 뛰어넘고 있습니다.',
    platform: 'Twitter',
    date: '2023-06-15',
    image: '/placeholder.png'
  },
  { 
    id: 2, 
    source: '세계여행가',
    title: '숨겨진 보석, 발리의 비밀 해변 탐방기',
    summary: '발리의 유명 관광지를 벗어나 현지인들만 아는 숨겨진 해변을 찾아 떠났습니다. 순수한 자연의 아름다움과 고요함을 간직한 이 비밀 해변들은 진정한 휴식을 찾는 여행자들에게 완벽한 천국이 될 것입니다.',
    platform: 'Instagram',
    date: '2023-06-14',
    image: '/placeholder.png'
  },
  { 
    id: 3, 
    source: '마스터 셰프',
    title: '15분 만에 뚝딱, 간단 파스타 레시피',
    summary: '바쁜 일상 속에서도 맛있는 한 끼를 즐기고 싶은 분들을 위한 초간단 파스타 레시피를 소개합니다. 최소한의 재료와 시간으로 최고의 맛을 내는 방법, 지금 바로 알아보세요!',
    platform: 'Twitter',
    date: '2023-06-13',
    image: '/placeholder.png'
  },
]

export function Optimizer() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleSearchClick = () => {
    setShowAdvancedSearch(true);
  };

  const handleLogoClick = () => {
    setShowAdvancedSearch(false);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* 왼쪽 사이드바 */}
      <aside className="w-64 border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4 cursor-pointer" onClick={handleLogoClick}>Logo</h1>
          <Input placeholder="검색..." />
        </div>
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2">연동된 계정</h2>
            {connectedAccounts.map((account) => (
              <Button key={account.id} variant="ghost" className="w-full justify-start mb-1">
                <account.icon className="mr-2 h-4 w-4" />
                {account.name}
              </Button>
            ))}
            <Button variant="outline" className="w-full justify-start mt-2">
              <PlusCircle className="mr-2 h-4 w-4" />
              계정 추가
            </Button>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-semibold">내 구독</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>이름순</DropdownMenuItem>
                  <DropdownMenuItem>플랫폼순</DropdownMenuItem>
                  <DropdownMenuItem>최근 추가순</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {subscriptions.map((sub) => (
              <Button key={sub.id} variant="ghost" className="w-full justify-start mb-1">
                <span className="mr-2">{sub.icon}</span>
                {sub.name}
                <span className="ml-auto text-xs text-muted-foreground">{sub.platform}</span>
              </Button>
            ))}
            <Button variant="outline" className="w-full justify-start mt-2">
              <PlusCircle className="mr-2 h-4 w-4" />
              구독 추가
            </Button>
          </div>
        </ScrollArea>
      </aside>

      {/* 오른쪽 메인 컨텐츠 */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">나의 구독 컨텐츠</h2>
          <div className="flex items-center space-x-2">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="필터" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 플랫폼</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">최신순</SelectItem>
                <SelectItem value="popular">인기순</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={handleSearchClick}>
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>
        {showAdvancedSearch ? (
          <SearchComponent />
        ) : (
          <ScrollArea className="flex-1">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-card rounded-lg shadow overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{post.source}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.summary}</p>
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm">
                        <BookmarkPlus className="h-4 w-4 mr-1" />
                        저장
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        공유
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </main>
    </div>
  )
}