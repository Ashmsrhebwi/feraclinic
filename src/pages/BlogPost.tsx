import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '../components/ui/button'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Dental Implants: Everything You Need to Know',
    slug: 'complete-guide-to-dental-implants',
    content: `
      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts placed into the jawbone to support replacement teeth with excellent stability and function.</p>

      <h2>How Do Dental Implants Work?</h2>
      <p>Because implants integrate with the bone, they provide a strong foundation for crowns, bridges, or full-arch restorations.</p>

      <h2>Types of Dental Implants</h2>
      <h3>Endosteal Implants</h3>
      <p>Placed directly into the jawbone and commonly used in most implant cases.</p>

      <h3>Subperiosteal Implants</h3>
      <p>Placed above the jawbone in selected cases where conventional bone support is limited.</p>

      <h2>The Dental Implant Procedure</h2>
      <ol>
        <li><strong>Consultation & Planning:</strong> Clinical examination, scans, and treatment design</li>
        <li><strong>Implant Placement:</strong> Surgical placement of the implant fixture</li>
        <li><strong>Healing Phase:</strong> Time for bone integration</li>
        <li><strong>Restoration:</strong> Placement of the final prosthetic tooth or bridge</li>
      </ol>

      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li>Natural appearance and stable function</li>
        <li>Improved chewing comfort</li>
        <li>Long-term support for oral health</li>
        <li>Preservation of surrounding bone structure</li>
      </ul>
    `,
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tags: ['dental implants', 'tooth replacement', 'oral surgery', 'restorative dentistry']
  },
  {
    id: '2',
    title: 'Hollywood Smile Secrets: How Celebrities Get Perfect Teeth',
    slug: 'hollywood-smile-secrets',
    content: `
      <h2>What Is a Hollywood Smile?</h2>
      <p>A Hollywood smile is a carefully designed cosmetic result that balances tooth shape, color, alignment, and facial harmony.</p>

      <h2>Popular Treatments</h2>
      <h3>Porcelain Veneers</h3>
      <p>Thin restorations placed on the front surface of the teeth to improve shape, color, and symmetry.</p>

      <h3>Professional Whitening</h3>
      <p>Used to brighten the smile and improve overall appearance.</p>

      <h3>Smile Design</h3>
      <p>Digital planning helps visualize and refine the final result before treatment begins.</p>

      <h2>Maintaining Your Result</h2>
      <ul>
        <li>Brush and floss consistently</li>
        <li>Attend regular dental check-ups</li>
        <li>Avoid excessive staining habits</li>
        <li>Use protective appliances when indicated</li>
      </ul>
    `,
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tags: ['hollywood smile', 'veneers', 'cosmetic dentistry', 'smile makeover']
  }
]

const relatedPosts = [
  {
    title: 'All-on-4 Implants: The Solution for Full Arch Restoration',
    slug: 'all-on-4-implants-solution',
    category: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'The Truth About Teeth Whitening: Myths vs Facts',
    slug: 'teeth-whitening-myths-vs-facts',
    category: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    slug: 'invisalign-vs-traditional-braces',
    category: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
]

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-fera-ivory px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-semibold text-fera-navy">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-fera-ivory">
      <section className="relative h-[420px] overflow-hidden lg:h-[520px]">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-fera-navy/90 via-fera-navy/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-8 lg:pb-14">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Link
                to="/blog"
                className="mb-4 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-fera-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <span className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-fera-gold backdrop-blur-md">
                {post.category}
              </span>

              <h1
                className="mb-5 max-w-4xl text-4xl font-semibold leading-tight text-white lg:text-5xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:p-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-6">
            <div className="text-sm text-slate-500">
              Article by <span className="font-medium text-fera-navy">{post.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 text-sm text-slate-500">Share:</span>
              <button className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:text-blue-600">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:text-sky-500">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:text-blue-700">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="prose prose-slate max-w-none prose-headings:text-fera-navy prose-h2:mt-10 prose-h2:text-3xl prose-h3:text-xl prose-p:leading-8 prose-li:leading-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 border-t border-black/5 pt-8">
            <h3 className="mb-4 text-lg font-semibold text-fera-navy">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-fera-gold/10 px-3 py-1 text-sm text-fera-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-fera-ivory p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fera-gold text-fera-navy">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-fera-navy">{post.author}</h4>
                <p className="mt-2 leading-7 text-slate-600">
                  Dental professional focused on evidence-based care, patient education,
                  and treatment planning that supports both function and aesthetics.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2
          className="mb-8 text-3xl font-semibold text-fera-navy"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Related Articles
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {relatedPosts.map((relatedPost, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
            >
              <Link to={`/blog/${relatedPost.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={relatedPost.image} alt={relatedPost.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-fera-gold/10 px-3 py-1 text-xs font-medium text-fera-gold">
                    {relatedPost.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-fera-navy transition-colors hover:text-fera-gold">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      <section className="bg-fera-navy px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 text-3xl font-semibold text-white lg:text-4xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Ready to Transform Your Smile?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/80">
            Speak with our team and receive a treatment consultation tailored to
            your needs, goals, and travel plans.
          </p>
          <Button variant="primary" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}