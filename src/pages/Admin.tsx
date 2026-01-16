import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

const ADMIN_STORAGE_KEY = "adminAuthed";
const DEFAULT_ADMIN_USER = "admin";
const DEFAULT_ADMIN_PASSWORD = "admin123";

type Product = {
  id: number;
  name: string;
  price: string;
  status: string;
};

type Page = {
  id: number;
  title: string;
  content: string;
};

const Admin = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Dragon Fruit Box", price: "R 250", status: "Active" },
    { id: 2, name: "Organic Starter Pack", price: "R 180", status: "Draft" },
  ]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const [pages, setPages] = useState<Page[]>([
    {
      id: 1,
      title: "Homepage",
      content: "Welcome to the Dragon Fruit Digital Hub. Update hero copy here.",
    },
    {
      id: 2,
      title: "About",
      content: "Tell your story and add your team details.",
    },
  ]);
  const [activePageId, setActivePageId] = useState(1);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    if (storedAuth === "true") {
      setIsAuthed(true);
    }
  }, []);

  const activePage = useMemo(
    () => pages.find((page) => page.id === activePageId),
    [activePageId, pages]
  );

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === DEFAULT_ADMIN_USER && password === DEFAULT_ADMIN_PASSWORD) {
      window.localStorage.setItem(ADMIN_STORAGE_KEY, "true");
      setIsAuthed(true);
      toast({
        title: "Welcome back!",
        description: "You are now signed in to the admin panel.",
      });
    } else {
      toast({
        title: "Invalid credentials",
        description: "Use the default admin credentials or update them in code.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthed(false);
    setUsername("");
    setPassword("");
  };

  const handleAddProduct = () => {
    if (!newProductName || !newProductPrice) {
      toast({
        title: "Missing details",
        description: "Add a product name and price before saving.",
        variant: "destructive",
      });
      return;
    }
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newProductName,
        price: newProductPrice,
        status: "Draft",
      },
    ]);
    setNewProductName("");
    setNewProductPrice("");
  };

  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleSavePage = () => {
    if (!activePage) return;
    setPages((prev) =>
      prev.map((page) => (page.id === activePage.id ? activePage : page))
    );
    toast({
      title: "Page saved",
      description: `${activePage.title} content updated locally.`,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="admin-username">Username</Label>
                <Input
                  id="admin-username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="admin"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="admin123"
                />
              </div>
              <Button className="w-full" type="submit">
                Sign in
              </Button>
              <p className="text-xs text-muted-foreground">
                Default credentials: admin / admin123 (change in code before launch).
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Admin Panel</p>
            <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Log out
          </Button>
        </header>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Product</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product name</Label>
                  <Input
                    id="product-name"
                    value={newProductName}
                    onChange={(event) => setNewProductName(event.target.value)}
                    placeholder="Dragon Fruit Box"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-price">Price</Label>
                  <Input
                    id="product-price"
                    value={newProductPrice}
                    onChange={(event) => setNewProductPrice(event.target.value)}
                    placeholder="R 250"
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={handleAddProduct}>Save</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.status}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Edit Pages</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div className="space-y-2">
                  {pages.map((page) => (
                    <Button
                      key={page.id}
                      variant={page.id === activePageId ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setActivePageId(page.id)}
                    >
                      {page.title}
                    </Button>
                  ))}
                </div>
                {activePage && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="page-title">Title</Label>
                      <Input
                        id="page-title"
                        value={activePage.title}
                        onChange={(event) =>
                          setPages((prev) =>
                            prev.map((page) =>
                              page.id === activePage.id
                                ? { ...page, title: event.target.value }
                                : page
                            )
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="page-content">Content</Label>
                      <Textarea
                        id="page-content"
                        rows={6}
                        value={activePage.content}
                        onChange={(event) =>
                          setPages((prev) =>
                            prev.map((page) =>
                              page.id === activePage.id
                                ? { ...page, content: event.target.value }
                                : page
                            )
                          )
                        }
                      />
                    </div>
                    <Button onClick={handleSavePage}>Save changes</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image-upload">Select image</Label>
                  <Input id="image-upload" type="file" onChange={handleImageChange} />
                </div>
                {imagePreview ? (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Preview</p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-64 rounded-lg border object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Upload an image to see a preview. Hook this up to your storage
                    provider when ready.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Admin;
