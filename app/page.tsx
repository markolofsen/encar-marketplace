import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Car
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse thousands of cars from trusted dealers and private sellers. Find the best deal on your next
                    vehicle.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/search">
                    <Button size="lg" className="w-full">
                      Search Cars
                    </Button>
                  </Link>
                  <Link href="/sell">
                    <Button size="lg" variant="outline" className="w-full">
                      Sell Your Car
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-white shadow-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Featured cars"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Search by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the perfect vehicle that fits your needs and budget
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              <Link href="/search?type=sedan" className="group flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-muted p-4 group-hover:bg-primary group-hover:text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Sedan</span>
              </Link>
              <Link href="/search?type=suv" className="group flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-muted p-4 group-hover:bg-primary group-hover:text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M5 17h-2v-6l2-5h12l2 5v6h-2" />
                    <path d="M5 13h14" />
                    <path d="M9 3v4" />
                    <path d="M15 3v4" />
                    <circle cx="5" cy="17" r="2" />
                    <circle cx="19" cy="17" r="2" />
                  </svg>
                </div>
                <span className="text-sm font-medium">SUV</span>
              </Link>
              <Link href="/search?type=truck" className="group flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-muted p-4 group-hover:bg-primary group-hover:text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Truck</span>
              </Link>
              <Link href="/search?type=luxury" className="group flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-muted p-4 group-hover:bg-primary group-hover:text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Luxury</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Listings</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our top picks from trusted dealers
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="used">Used</TabsTrigger>
                  <TabsTrigger value="certified">Certified Pre-Owned</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Link href={`/cars/${i}`} key={i}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=Car+${i}`}
                            alt={`Car ${i}`}
                            className="object-cover"
                            fill
                          />
                          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">Toyota Camry {2020 + i}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm ml-1">4.{i}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              Excellent condition, low mileage, one owner, full service history.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              <Badge variant="outline" className="text-xs">
                                {30000 - i * 2000} km
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Automatic
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Petrol
                              </Badge>
                            </div>
                            <div className="pt-4">
                              <p className="font-bold text-lg">${(20000 + i * 1000).toLocaleString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="new" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Link href={`/cars/${i + 10}`} key={i}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=New+Car+${i}`}
                            alt={`New Car ${i}`}
                            className="object-cover"
                            fill
                          />
                          <Badge className="absolute top-2 right-2 bg-green-500 text-white">New</Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">Honda Accord {2023}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm ml-1">5.0</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              Brand new model with latest features and technology.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              <Badge variant="outline" className="text-xs">
                                0 km
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Automatic
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Hybrid
                              </Badge>
                            </div>
                            <div className="pt-4">
                              <p className="font-bold text-lg">${(30000 + i * 2000).toLocaleString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="used" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Link href={`/cars/${i + 20}`} key={i}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=Used+Car+${i}`}
                            alt={`Used Car ${i}`}
                            className="object-cover"
                            fill
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">Nissan Altima {2018 + i}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm ml-1">4.{i}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              Well maintained with complete service records.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              <Badge variant="outline" className="text-xs">
                                {50000 - i * 5000} km
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Automatic
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Petrol
                              </Badge>
                            </div>
                            <div className="pt-4">
                              <p className="font-bold text-lg">${(15000 + i * 1000).toLocaleString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="certified" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Link href={`/cars/${i + 30}`} key={i}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=Certified+Car+${i}`}
                            alt={`Certified Car ${i}`}
                            className="object-cover"
                            fill
                          />
                          <Badge className="absolute top-2 right-2 bg-blue-500 text-white">Certified</Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">BMW 3 Series {2020 + i}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm ml-1">4.{8 - i}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              Certified pre-owned with extended warranty and thorough inspection.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              <Badge variant="outline" className="text-xs">
                                {25000 - i * 3000} km
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Automatic
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Diesel
                              </Badge>
                            </div>
                            <div className="pt-4">
                              <p className="font-bold text-lg">${(25000 + i * 2000).toLocaleString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-10">
              <Link href="/search">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Listings
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We provide a seamless car buying and selling experience with trusted dealers and verified listings.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Verified Listings</h3>
                      <p className="text-sm text-muted-foreground">
                        All listings are verified for authenticity and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="M20 2 L4 22" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Secure Transactions</h3>
                      <p className="text-sm text-muted-foreground">
                        Safe and secure payment processing for all transactions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Trusted Dealers</h3>
                      <p className="text-sm text-muted-foreground">
                        Network of verified and trusted car dealers nationwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Comprehensive Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed vehicle history and specifications for informed decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Car dealership"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
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
