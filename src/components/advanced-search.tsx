'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"

import { 
  Search, 
  Calendar,
  Twitter,
  Instagram,
  ArrowUpDown,
  Clock,
  Trash2
} from 'lucide-react'

// 샘플 데이터
const searchHistory = [
  "AI 기술 동향",
  "5G 네트워크 발전",
  "사이버 보안 최신 동향",
  "퀀텀 컴퓨팅 응용",
  "블록체인 기술 활용"
]

const recommendedSearches = [
  "메타버스",
  "인공지능 윤리",
  "클라우드 컴퓨팅",
  "엣지 컴퓨팅",
  "디지털 트랜스포메이션"
]

const subscriptionSources = [
  "테크 크런치",
  "와이어드",
  "테크레이더",
  "더 버지",
  "CNET"
]

export function AdvancedSearch() {
  return (
    <div className="flex h-screen bg-background">
      {/* 왼쪽 검색 옵션 패널 */}
      <aside className="w-80 border-r p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">상세 검색</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="search-input">검색어</Label>
            <div className="flex mt-1">
              <Input id="search-input" placeholder="검색어를 입력하세요" />
              <Button className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <Label>날짜 범위</Label>
            <div className="flex items-center mt-1">
              <Input type="date" className="w-full" />
              <span className="mx-2">~</span>
              <Input type="date" className="w-full" />
            </div>
          </div>
          
          <div>
            <Label>플랫폼</Label>
            <div className="flex items-center space-x-2 mt-1">
              <Switch id="twitter" />
              <Label htmlFor="twitter"><Twitter className="h-4 w-4 mr-1" />Twitter</Label>
              <Switch id="instagram" />
              <Label htmlFor="instagram"><Instagram className="h-4 w-4 mr-1" />Instagram</Label>
            </div>
          </div>
          
          <div>
            <Label>구독 소스</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="구독 소스 선택" />
              </SelectTrigger>
              <SelectContent>
                {subscriptionSources.map((source, index) => (
                  <SelectItem key={index} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>인기도</Label>
            <Slider defaultValue={[50]} max={100} step={1} className="mt-1" />
          </div>
          
          <div>
            <Label>정렬 기준</Label>
            <RadioGroup defaultValue="recent">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recent" id="recent" />
                <Label htmlFor="recent">최신순</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relevant" id="relevant" />
                <Label htmlFor="relevant">관련성순</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="popular" id="popular" />
                <Label htmlFor="popular">인기순</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </aside>

      {/* 오른쪽 검색 결과 및 추천 영역 */}
      <main className="flex-1 p-4 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">검색 결과</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">최신순</SelectItem>
              <SelectItem value="relevant">관련성순</SelectItem>
              <SelectItem value="popular">인기순</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="space-y-4">
            {/* 검색 결과 아이템 (예시) */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-card rounded-lg p-4 shadow">
                <h3 className="text-lg font-semibold mb-2">검색 결과 제목 {item}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  이것은 검색 결과 {item}의 간단한 설명입니다. 실제 검색 결과에 따라 내용이 채워질 것입니다.
                </p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>테크 크런치</span>
                  <span>2023-06-{15 + item}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* 하단 검색 기록 및 추천 검색어 */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">최근 검색 기록</h3>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 mr-1" />
              기록 삭제
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {searchHistory.map((item, index) => (
              <Button key={index} variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-1" />
                {item}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
export default AdvancedSearch;