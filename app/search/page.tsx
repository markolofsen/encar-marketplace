"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function SearchPage() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Auto</span>
              <span>Market</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
              Search Cars
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:underline underline-offset-4">
              Sell Your Car
            </Link>
            <Link href="/dealers" className="text-sm font-medium hover:underline underline-offset-4">
              Dealers
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="hidden md:flex">
                Register
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Search Cars</h1>
              <p className="text-muted-foreground">Find your perfect vehicle from our extensive listings</p>
            </div>
            <div className="flex items-center gap-2">
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down your search results</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Price Range</h3>
                      <div className="space-y-2">
                        <Slider defaultValue={[5000, 50000]} min={0} max={100000} step={1000} />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">$5,000</span>
                          <span className="text-sm">$50,000</span>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium">Make</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="make-toyota" />
                          <label
                            htmlFor="make-toyota"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Toyota
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="make-honda" />
                          <label
                            htmlFor="make-honda"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Honda
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="make-ford" />
                          <label
                            htmlFor="make-ford"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Ford
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="make-bmw" />
                          <label
                            htmlFor="make-bmw"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            BMW
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="make-mercedes" />
                          <label
                            htmlFor="make-mercedes"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Mercedes-Benz
                          </label>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium">Body Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-sedan" />
                          <label
                            htmlFor="type-sedan"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Sedan
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-suv" />
                          <label
                            htmlFor="type-suv"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            SUV
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-truck" />
                          <label
                            htmlFor="type-truck"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Truck
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-coupe" />
                          <label
                            htmlFor="type-coupe"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Coupe
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-hatchback" />
                          <label
                            htmlFor="type-hatchback"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hatchback
                          </label>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium">Year</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="year-2023" />
                          <label
                            htmlFor="year-2023"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2023
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="year-2022" />
                          <label
                            htmlFor="year-2022"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2022
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="year-2021" />
                          <label
                            htmlFor="year-2021"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2021
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="year-2020" />
                          <label
                            htmlFor="year-2020"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2020
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="year-older" />
                          <label
                            htmlFor="year-older"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2019 and older
                          </label>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium">Fuel Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fuel-petrol" />
                          <label
                            htmlFor="fuel-petrol"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Petrol
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fuel-diesel" />
                          <label
                            htmlFor="fuel-diesel"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Diesel
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fuel-hybrid" />
                          <label
                            htmlFor="fuel-hybrid"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hybrid
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fuel-electric" />
                          <label
                            htmlFor="fuel-electric"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Electric
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Reset</Button>
                      <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="flex w-full items-center gap-2">
                <Input
                  type="search"
                  placeholder="Search by make, model, or keyword..."
                  className="w-full md:w-[300px]"
                />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="hidden md:block">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-2">
                    <Slider defaultValue={[5000, 50000]} min={0} max={100000} step={1000} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">$5,000</span>
                      <span className="text-sm">$50,000</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <Accordion type="multiple" defaultValue={["make", "body", "year", "fuel"]}>
                  <AccordionItem value="make">
                    <AccordionTrigger>Make</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-make-toyota" />
                          <label
                            htmlFor="desktop-make-toyota"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Toyota
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-make-honda" />
                          <label
                            htmlFor="desktop-make-honda"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Honda
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-make-ford" />
                          <label
                            htmlFor="desktop-make-ford"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Ford
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-make-bmw" />
                          <label
                            htmlFor="desktop-make-bmw"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            BMW
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-make-mercedes" />
                          <label
                            htmlFor="desktop-make-mercedes"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Mercedes-Benz
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="body">
                    <AccordionTrigger>Body Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-type-sedan" />
                          <label
                            htmlFor="desktop-type-sedan"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Sedan
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-type-suv" />
                          <label
                            htmlFor="desktop-type-suv"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            SUV
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-type-truck" />
                          <label
                            htmlFor="desktop-type-truck"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Truck
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-type-coupe" />
                          <label
                            htmlFor="desktop-type-coupe"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Coupe
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-type-hatchback" />
                          <label
                            htmlFor="desktop-type-hatchback"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hatchback
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="year">
                    <AccordionTrigger>Year</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-year-2023" />
                          <label
                            htmlFor="desktop-year-2023"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2023
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-year-2022" />
                          <label
                            htmlFor="desktop-year-2022"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2022
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-year-2021" />
                          <label
                            htmlFor="desktop-year-2021"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2021
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-year-2020" />
                          <label
                            htmlFor="desktop-year-2020"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2020
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-year-older" />
                          <label
                            htmlFor="desktop-year-older"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2019 and older
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fuel">
                    <AccordionTrigger>Fuel Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-fuel-petrol" />
                          <label
                            htmlFor="desktop-fuel-petrol"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Petrol
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-fuel-diesel" />
                          <label
                            htmlFor="desktop-fuel-diesel"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Diesel
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-fuel-hybrid" />
                          <label
                            htmlFor="desktop-fuel-hybrid"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hybrid
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="desktop-fuel-electric" />
                          <label
                            htmlFor="desktop-fuel-electric"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Electric
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Separator />
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">Showing 1-24 of 256 results</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="year-new">Year: Newest First</SelectItem>
                      <SelectItem value="year-old">Year: Oldest First</SelectItem>
                      <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <Link href={`/cars/${i}`} key={i}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="aspect-video relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Car+${i}`}
                          alt={`Car ${i}`}
                          className="object-cover"
                          fill
                        />
                        {i % 5 === 0 && (
                          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">
                              {i % 3 === 0
                                ? `Toyota Camry ${2020 + (i % 5)}`
                                : i % 3 === 1
                                  ? `Honda Accord ${2019 + (i % 4)}`
                                  : `BMW 3 Series ${2021 + (i % 3)}`}
                            </h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="text-sm ml-1">4.{(i % 5) + 3}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {i % 3 === 0
                              ? "Excellent condition, low mileage, one owner, full service history."
                              : i % 3 === 1
                                ? "Well maintained with complete service records and no accidents."
                                : "Premium features, leather interior, navigation system, and more."}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            <Badge variant="outline" className="text-xs">
                              {30000 - i * 1500} km
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {i % 2 === 0 ? "Automatic" : "Manual"}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {i % 4 === 0 ? "Petrol" : i % 4 === 1 ? "Diesel" : i % 4 === 2 ? "Hybrid" : "Electric"}
                            </Badge>
                          </div>
                          <div className="pt-4">
                            <p className="font-bold text-lg">${(18000 + i * 1200).toLocaleString()}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span className="sr-only">Next page</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Auto</span>
              <span>Market</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted marketplace for buying and selling cars. Find the best deals on new and used vehicles.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Help</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Car Valuation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Inspection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 lg:flex-row lg:justify-between">
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              © 2023 AutoMarket. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground lg:text-left">Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
