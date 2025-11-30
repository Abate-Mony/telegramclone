import { Link, useLocation, useParams } from 'react-router-dom'
import users from '../Constants/User'

export default function 


() {
    const currentUser=null
    const location=useLocation()
    const id=useParams().id
const isSelectedUser=(_id)=>_id==id
  return (
                      <div className="flex-1  overflow-y-auto custom-scrollbar pt-3">
                          {users?.map((user, idx) => (
                          <>
                          {/* show only on bigger screen */}
                              <Link
                              to={`/chat/${user.id}`} 

                                  key={idx}
                                //   onClick={() => setCurrentUser(user)}
                                  className={` py-3 px-3 gap-3 cursor-pointer transition-colors hidden md:flex ${
                                        isSelectedUser(user.id) 
                                          ? 'bg-[#3390EC] hover:bg-[#3390EC] rounded-xl mx-2' 
                                          : 'hover:bg-gray-100'
                                  }`}
                              >
                                {/* {user.id} */}
                                  <div className="flex-none h-[52px] w-[52px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                                      {user?.imgurl ? (
                                          <img className='h-full w-full object-cover rounded-full' src={user?.imgurl} alt="user" />
                                      ) : (
                                          <h3 className="text-lg font-medium text-white uppercase">{user?.name?.slice(0, 1) }</h3>
                                      )}
                                  </div>
                                  <div className={`text-box pb-3 overflow-hidden flex-1 ${
                                        isSelectedUser(user.id) ? '' : 'border-b-[1px] border-gray-100'
                                  }`}>
                                      <div className="flex justify-between items-start leading-5 mb-1">
                                          <h3 className={`text-[15px] font-medium line-clamp-1 max-w-[200px] overflow-hidden ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-900'
                                          }`}>{user.name}</h3>
                                          <span className={`text-[13px] ml-2 flex-shrink-0 flex items-center gap-1 ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-400'
                                          }`}>
                                              {user.textmessages && user.textmessages.length > 0 && user.textmessages[user.textmessages.length - 1].user && (
                                                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="flex-shrink-0">
                                                      <path d="M6 6L8 8L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                      <path d="M10 6L12 8L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                  </svg>
                                              )}
                                              {user?.lastmessage?.time}
                                          </span>
                                      </div>
                                      <div className="flex justify-between items-center leading-5 mt-1">
                                          <h3 className={`text-[14px] line-clamp-1 flex-1 ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-500'
                                          }`}>{user?.lastmessage?.message}</h3>
                                          {user.lastmessage.msgcnt > 0 && (
                                              <span className={`text-[12px] font-medium min-w-[20px] px-1.5 h-[20px] rounded-full flex items-center justify-center ml-2 flex-shrink-0 ${
                                                    isSelectedUser(user.id) ? 'bg-white text-[#3390EC]' : 'bg-[#4ECC5E] text-white'
                                              }`}>
                                                  {user.lastmessage.msgcnt}
                                              </span>
                                          )}
                                      </div>
                                  </div>
                              </Link>
                              {/* show only on smaller screen */}
                                  <Link
                              to={`/chat/small/${user.id}`} 
                                //   key={idx}
                                //   onClick={() => setCurrentUser(user)}
                                  className={`flex  md:hidden py-3 px-3 gap-3 cursor-pointer transition-colors ${
                                        isSelectedUser(user.id) 
                                          ? 'bg-[#3390EC] hover:bg-[#3390EC] rounded-xl mx-2' 
                                          : 'hover:bg-gray-100'
                                  }`}
                              >
                                {/* {user.id} */}
                                  <div className="flex-none h-[52px] w-[52px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                                      {user?.imgurl ? (
                                          <img className='h-full w-full object-cover rounded-full' src={user?.imgurl} alt="user" />
                                      ) : (
                                          <h3 className="text-lg font-medium text-white uppercase">{user?.name?.slice(0, 1) }</h3>
                                      )}
                                  </div>
                                  <div className={`text-box pb-3 overflow-hidden flex-1 ${
                                        isSelectedUser(user.id) ? '' : 'border-b-[1px] border-gray-100'
                                  }`}>
                                      <div className="flex justify-between items-start leading-5 mb-1">
                                          <h3 className={`text-[15px] font-medium line-clamp-1 max-w-[200px] overflow-hidden ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-900'
                                          }`}>{user.name}</h3>
                                          <span className={`text-[13px] ml-2 flex-shrink-0 flex items-center gap-1 ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-400'
                                          }`}>
                                              {user.textmessages && user.textmessages.length > 0 && user.textmessages[user.textmessages.length - 1].user && (
                                                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="flex-shrink-0">
                                                      <path d="M6 6L8 8L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                      <path d="M10 6L12 8L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                  </svg>
                                              )}
                                              {user?.lastmessage?.time}
                                          </span>
                                      </div>
                                      <div className="flex justify-between items-center leading-5 mt-1">
                                          <h3 className={`text-[14px] line-clamp-1 flex-1 ${
                                                isSelectedUser(user.id) ? 'text-white' : 'text-gray-500'
                                          }`}>{user?.lastmessage?.message}</h3>
                                          {user.lastmessage.msgcnt > 0 && (
                                              <span className={`text-[12px] font-medium min-w-[20px] px-1.5 h-[20px] rounded-full flex items-center justify-center ml-2 flex-shrink-0 ${
                                                    isSelectedUser(user.id) ? 'bg-white text-[#3390EC]' : 'bg-[#4ECC5E] text-white'
                                              }`}>
                                                  {user.lastmessage.msgcnt}
                                              </span>
                                          )}
                                      </div>
                                  </div>
                              </Link>
                          </>
                          ))}
                      </div>
  )
}
