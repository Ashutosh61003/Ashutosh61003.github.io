import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
    const activities = [
        { id: 1, type: 'thought', label: 'Thought', text: 'Reflecting on the ethics of AI memory persistence.', time: '2h ago' },
        { id: 2, type: 'project', label: 'Commit', text: 'Pushed v2.0 of the Portfolio to production.', time: '5h ago' },
        { id: 3, type: 'photo', label: 'Photo', text: 'Golden hour run in the park.', time: '1d ago' },
        { id: 4, type: 'activity', label: 'Fitness', text: 'Completed a 10km run.', time: '1d ago' },
        { id: 5, type: 'thought', label: 'Idea', text: 'What if browsers had built-in local LLMs?', time: '2d ago' },
    ];

    return (
        <div className="activity-feed-section container">
            <h3 className="activity-feed-title">Recent Updates</h3>
            <div className="feed-scroll-container">
                {activities.map((item) => (
                    <div key={item.id} className="feed-item">
                        <div className="feed-header">
                            <span className={`feed-type type-${item.type}`}>{item.label}</span>
                            <span className="feed-time">{item.time}</span>
                        </div>
                        <div className="feed-content">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
