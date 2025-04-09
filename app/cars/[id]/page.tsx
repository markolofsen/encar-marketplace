"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Car,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Heart,
  MapPin,
  Share2,
  Star,
  Tally4,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const [activeImage, setActiveImage] = useState(0)
  const carId = Number.parseInt(params.id)

  // Mock car data based on ID
  const car = {
    id: carId,
    title: `${carId % 3 === 0 ? "Toyota Camry" : carId % 3 === 1 ? "Honda Accord" : "BMW 3 Series"} ${2020 + (carId % 5)}`,
    price: 20000 + carId * 1000,
    location: "New York, NY",
    rating: 4.7,
    reviews: 24,
    description:
      "This vehicle is in excellent condition with low mileage and a clean history report. It features a powerful engine, comfortable interior, and the latest technology features. Perfect for families or individuals looking for reliability and style.",
    features: [
      "Bluetooth Connectivity",
      "Backup Camera",
      "Leather Seats",
      "Sunroof",
      "Navigation System",
      "Heated Seats",
      "Keyless Entry",
      "Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
    ],
    specs: {
      mileage: 30000 - carId * 1500,
      transmission: carId % 2 === 0 ? "Automatic" : "Manual",
      fuelType: carId % 4 === 0 ? "Petrol" : carId % 4 === 1 ? "Diesel" : carId % 4 === 2 ? "Hybrid" : "Electric",
      engine: "2.5L 4-Cylinder",
      drivetrain: "Front-Wheel Drive",
      exteriorColor: "Pearl White",
      interiorColor: "Black",
      vin: `ABC${carId}123456789`,
      bodyType: carId % 4 === 0 ? "Sedan" : carId % 4 === 1 ? "SUV" : carId % 4 === 2 ? "Truck" : "Coupe",
      year: 2020 + (carId % 5),
    },
    seller: {
      name: "Premium Auto Dealership",
      type: "Dealer",
      rating: 4.8,
      reviews: 156,
      location: "New York, NY",
      phone: "(555) 123-4567",
      email: "contact@premiumauto.com",
    },
    images: Array(6)
      .fill(0)
      .map((_, i) => `/placeholder.svg?height=600&width=800&text=Car+${carId}+Image+${i + 1}`),
  }

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
          <div className="mb-6">
            <Link
              href="/search"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Search Results
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">{car.title}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 text-sm">{car.rating}</span>
                      <span className="ml-1 text-sm text-muted-foreground">({car.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="ml-1 text-sm text-muted-foreground">{car.location}</span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={car.images[activeImage] || "/placeholder.svg"}
                    alt={car.title}
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                    onClick={() => setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                    onClick={() => setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1))}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {car.images.map((image, i) => (
                    <button
                      key={i}
                      className={`relative aspect-[4/3] w-24 overflow-hidden rounded-md ${
                        activeImage === i ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      onClick={() => setActiveImage(i)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${car.title} - Image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4 pt-4">
                    <div>
                      <h2 className="text-xl font-semibold">Description</h2>
                      <p className="mt-2 text-muted-foreground">{car.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Mileage</p>
                        <p className="font-medium">{car.specs.mileage.toLocaleString()} km</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{car.specs.year}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Fuel Type</p>
                        <p className="font-medium">{car.specs.fuelType}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Transmission</p>
                        <p className="font-medium">{car.specs.transmission}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="space-y-4 pt-4">
                    <h2 className="text-xl font-semibold">Features & Options</h2>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {car.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
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
                            className="h-5 w-5 text-primary"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="specs" className="space-y-4 pt-4">
                    <h2 className="text-xl font-semibold">Technical Specifications</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Make</p>
                          <p className="font-medium">{car.title.split(" ")[0]}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Model</p>
                          <p className="font-medium">{car.title.split(" ")[1]}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Year</p>
                          <p className="font-medium">{car.specs.year}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Body Type</p>
                          <p className="font-medium">{car.specs.bodyType}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Exterior Color</p>
                          <p className="font-medium">{car.specs.exteriorColor}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Engine</p>
                          <p className="font-medium">{car.specs.engine}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Transmission</p>
                          <p className="font-medium">{car.specs.transmission}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Drivetrain</p>
                          <p className="font-medium">{car.specs.drivetrain}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">Fuel Type</p>
                          <p className="font-medium">{car.specs.fuelType}</p>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <p className="text-muted-foreground">VIN</p>
                          <p className="font-medium">{car.specs.vin}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div>
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold">${car.price.toLocaleString()}</h2>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Fixed Price</Badge>
                          {carId % 5 === 0 && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Year</p>
                            <p className="text-sm text-muted-foreground">{car.specs.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tally4 className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Mileage</p>
                            <p className="text-sm text-muted-foreground">{car.specs.mileage.toLocaleString()} km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Transmission</p>
                            <p className="text-sm text-muted-foreground">{car.specs.transmission}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Fuel Type</p>
                            <p className="text-sm text-muted-foreground">{car.specs.fuelType}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full">Contact Seller</Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                              Schedule Test Drive
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Schedule a Test Drive</DialogTitle>
                              <DialogDescription>
                                Fill out the form below to schedule a test drive for this vehicle.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="name" className="text-right text-sm font-medium">
                                  Name
                                </label>
                                <input
                                  id="name"
                                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="email" className="text-right text-sm font-medium">
                                  Email
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="john@example.com"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="phone" className="text-right text-sm font-medium">
                                  Phone
                                </label>
                                <input
                                  id="phone"
                                  type="tel"
                                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="date" className="text-right text-sm font-medium">
                                  Date
                                </label>
                                <input
                                  id="date"
                                  type="date"
                                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button type="submit">Schedule</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" className="w-full">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Add to favorites</span>
                          </Button>
                          <Button variant="outline" size="icon" className="w-full">
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={car.seller.name} />
                          <AvatarFallback>{car.seller.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{car.seller.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-1 text-sm">{car.seller.rating}</span>
                            <span className="ml-1 text-sm text-muted-foreground">({car.seller.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span className="text-sm">{car.seller.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          <span className="text-sm">{car.seller.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{car.seller.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Dealer Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">Similar Listings</h2>
            <p className="text-muted-foreground">You might also be interested in these vehicles</p>
            <div className="mt-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                      <Link href={`/cars/${carId + i}`}>
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                          <div className="aspect-video relative">
                            <Image
                              src={`/placeholder.svg?height=200&width=300&text=Similar+Car+${i}`}
                              alt={`Similar Car ${i}`}
                              className="object-cover"
                              fill
                            />
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
                                  <span className="text-sm ml-1">4.{i}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="outline" className="text-xs">
                                  {30000 - i * 2000} km
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {i % 2 === 0 ? "Automatic" : "Manual"}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {i % 4 === 0
                                    ? "Petrol"
                                    : i % 4 === 1
                                      ? "Diesel"
                                      : i % 4 === 2
                                        ? "Hybrid"
                                        : "Electric"}
                                </Badge>
                              </div>
                              <div className="pt-4">
                                <p className="font-bold text-lg">${(19000 + i * 1000).toLocaleString()}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
