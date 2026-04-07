"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  Clock,
  ChevronRight,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Zap,
  Target,
  Users,
  Sparkles,
  Filter,
  X,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Linkedin,
  Twitter,
  Facebook,
  Hash,
  ExternalLink,
  ChevronLeft,
  ChevronDown,
  PenTool,
  Cpu,
  Globe,
  Smartphone,
  Code,
  Brain,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  // Blog categories
  const categories = [
    { id: "all", name: "All Articles", count: 28, icon: BookOpen },
    { id: "marketing", name: "Digital Marketing", count: 8, icon: TrendingUp },
    { id: "ai", name: "AI & Technology", count: 6, icon: Brain },
    { id: "webdev", name: "Web Development", count: 7, icon: Code },
    { id: "mobile", name: "Mobile Apps", count: 4, icon: Smartphone },
    { id: "strategy", name: "Growth Strategy", count: 5, icon: Target },
  ];

  // Trending tags
  const trendingTags = [
    "SEO",
    "AI Search",
    "React",
    "NextJS",
    "UI/UX",
    "SaaS",
    "E-commerce",
    "Digital Transformation",
    "Performance",
    "Analytics",
    "Mobile First",
  ];

  // Featured articles
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Search: How AI is Transforming SEO Forever",
      excerpt:
        "Discover how artificial intelligence is reshaping search algorithms and what it means for your business's online visibility.",
      category: "ai",
      readTime: "8 min read",
      date: "Mar 15, 2024",
      author: "Alex Chen",
      views: "2.4k",
      likes: 124,
      comments: 42,
      tags: ["AI Search", "SEO", "Future Tech"],
      featured: true,
      image: "/blog/ai-search-future.jpg",
    },
    {
      id: 2,
      title:
        "Building Scalable SaaS Products: Architecture Patterns That Scale",
      excerpt:
        "Learn the architectural decisions that make or break SaaS products as they grow from 100 to 1M+ users.",
      category: "webdev",
      readTime: "12 min read",
      date: "Mar 10, 2024",
      author: "Sarah Johnson",
      views: "1.8k",
      likes: 89,
      comments: 31,
      tags: ["SaaS", "Architecture", "Scalability"],
      featured: true,
      image: "/blog/saas-architecture.jpg",
    },
  ];

  // Regular articles
  const articles = [
    {
      id: 3,
      title: "Mobile-First Design: Why It's No Longer Optional",
      excerpt:
        "With mobile traffic dominating, learn how to create experiences that excel on small screens first.",
      category: "mobile",
      readTime: "6 min read",
      date: "Mar 8, 2024",
      author: "Marcus Rivera",
      views: "1.2k",
      likes: 56,
      comments: 18,
      tags: ["Mobile", "UI/UX", "Design"],
    },
    {
      id: 4,
      title: "Content Strategy for 2024: Beyond Keywords",
      excerpt:
        "How to create content that ranks, engages, and converts in the age of AI-powered search.",
      category: "marketing",
      readTime: "10 min read",
      date: "Mar 5, 2024",
      author: "Lisa Park",
      views: "1.5k",
      likes: 72,
      comments: 24,
      tags: ["Content", "SEO", "Strategy"],
    },
    {
      id: 5,
      title: "Performance Optimization: Making Your Site Blazing Fast",
      excerpt:
        "Practical techniques to improve Core Web Vitals and boost conversion rates.",
      category: "webdev",
      readTime: "7 min read",
      date: "Mar 3, 2024",
      author: "David Kumar",
      views: "1.3k",
      likes: 63,
      comments: 21,
      tags: ["Performance", "Web Vitals", "Optimization"],
    },
    {
      id: 6,
      title: "The Psychology of User Experience",
      excerpt:
        "Understanding how users think to create intuitive and engaging digital products.",
      category: "strategy",
      readTime: "9 min read",
      date: "Feb 28, 2024",
      author: "Emma Watson",
      views: "1.1k",
      likes: 48,
      comments: 16,
      tags: ["Psychology", "UX", "Design Thinking"],
    },
    {
      id: 7,
      title: "API Design Best Practices for Modern Applications",
      excerpt:
        "Learn how to design robust, scalable, and developer-friendly APIs.",
      category: "webdev",
      readTime: "11 min read",
      date: "Feb 25, 2024",
      author: "James Wilson",
      views: "980",
      likes: 41,
      comments: 12,
      tags: ["API", "Backend", "Development"],
    },
    {
      id: 8,
      title: "Growth Hacking Strategies That Actually Work",
      excerpt:
        "Real-world tactics for accelerating user acquisition and retention.",
      category: "strategy",
      readTime: "8 min read",
      date: "Feb 22, 2024",
      author: "Priya Sharma",
      views: "1.6k",
      likes: 78,
      comments: 29,
      tags: ["Growth", "Marketing", "Strategy"],
    },
    {
      id: 9,
      title: "The Rise of Voice Search and What It Means for Your Business",
      excerpt:
        "How voice assistants are changing search behavior and how to optimize for it.",
      category: "ai",
      readTime: "7 min read",
      date: "Feb 20, 2024",
      author: "Alex Chen",
      views: "920",
      likes: 39,
      comments: 14,
      tags: ["Voice Search", "AI", "SEO"],
    },
    {
      id: 10,
      title: "Building Progressive Web Apps: The Complete Guide",
      excerpt:
        "Everything you need to know about creating reliable, fast, and engaging PWAs.",
      category: "mobile",
      readTime: "14 min read",
      date: "Feb 18, 2024",
      author: "Marcus Rivera",
      views: "1.4k",
      likes: 67,
      comments: 22,
      tags: ["PWA", "Mobile", "Web"],
    },
  ];

  // Newsletter subscribers
  const subscribers = "12,847";

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory,
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Sort articles
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => parseInt(b.views) - parseInt(a.views));
        break;
      case "trending":
        filtered.sort((a, b) => b.likes + b.comments - (a.likes + a.comments));
        break;
      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  return (
    <main className="min-h-screen">
      <InnerHero
        title="Our Blog"
        subtitle="Insights, ideas, and updates on digital marketing, and technology."
        bgImage="/blog-im3.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      {/* Featured Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#96b3e9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Featured Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Must-Read Articles
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all h-full">
                    {/* Article Header */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <CategoryIcon className="w-4 h-4" />
                          <span className="capitalize">{article.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mt-2 line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <button className="group inline-flex items-center gap-2 text-blue-600 font-medium">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Filter Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Filter by:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            selectedCategory === category.id
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {category.name}
                          <span className="text-xs opacity-80">
                            ({category.count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
              </div>

              {/* Search Results Info */}
              {(searchQuery || selectedCategory !== "all") && (
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Showing {filteredArticles.length} article
                        {filteredArticles.length !== 1 ? "s" : ""}
                        {searchQuery && ` for "${searchQuery}"`}
                        {selectedCategory !== "all" &&
                          ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <X className="w-4 h-4" />
                      Clear filters
                    </button>
                  </div>
                </div>
              )}

              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => {
                    const CategoryIcon = getCategoryIcon(article.category);
                    return (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                          <div className="p-6">
                            {/* Category & Date */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                                  <CategoryIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-blue-600 capitalize">
                                    {article.category}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {article.date}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {article.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {article.author}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Author
                                </div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {article.tags.slice(0, 2).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                              {article.tags.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                                  +{article.tags.length - 2} more
                                </span>
                              )}
                            </div>

                            {/* Stats & Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{article.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{article.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{article.comments}</span>
                                </div>
                              </div>

                              <button className="flex items-center gap-2 text-blue-600 font-medium group">
                                Read Article
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                /* No Results */
                <div className="text-center py-16">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No articles found
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8">
                    We couldn't find any articles matching your search criteria.
                    Try different keywords or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
                  >
                    View All Articles
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredArticles.length > 0 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg font-medium transition-all ${
                        page === 1
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Trending Tags */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Hash className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Trending Topics
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
                <p className="text-blue-100 mb-6">
                  Get weekly insights on digital growth and technology trends
                  delivered to your inbox.
                </p>

                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-100 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>

                <div className="mt-4 text-center text-blue-100 text-sm">
                  Join {subscribers}+ subscribers
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Most Popular
                  </h3>
                </div>

                <div className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="group">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Eye className="w-3 h-3" />
                            <span>{article.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share & Follow */}
              <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow & Share
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
