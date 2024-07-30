import Link from 'next/link'
import { RouterEnum } from "./_enum/router-enum";
import { News } from "./news/news";

export default function Home() {
  return (
    <main>
      <h2>Welcome to the Dojo Helpdesk Support Dashboard</h2>
      <p>
        Your central hub for managing and resolving customer inquiries efficiently. Stay on top of open tickets, track
        ongoing issues, and review completed cases. Access real-time metrics and updates to enhance your support team's
        performance and deliver exceptional customer service. Explore the latest company news and announcements to stay
        informed about new features and important changes. Let's work together to provide the best support experience
        for our users.
      </p>
      
      
      <div className="btn-container ">
        <Link href={RouterEnum.tickets}>
          <button className="btn-primary btn">View Tickets</button>
        </Link>
      </div>
      
      <News/>
    
    </main>
  )
}
