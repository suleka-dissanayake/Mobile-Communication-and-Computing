// Set this to your backend, e.g. 'http://192.168.1.20:3000/students'.
// Leave null to use the built-in sample data (works offline).
export const API_URL = null

const LOCAL_STUDENTS = [
  { id: '1', name: 'Kamal', regNo: 'IT001', age: 20, city: 'Kandy', courses: ['Programming', 'Databases'] },
  { id: '2', name: 'Nimal', regNo: 'IT002', age: 22, city: 'Colombo', courses: ['Networking', 'Web Development'] },
  { id: '3', name: 'Sunil', regNo: 'IT003', age: 21, city: 'Gampaha', courses: ['Mobile Apps', 'Databases'] },
  { id: '4', name: 'Amal', regNo: 'IT004', age: 23, city: 'Vavuniya', courses: ['Operating Systems'] },
  { id: '5', name: 'Saman', regNo: 'IT005', age: 20, city: 'Jaffna', courses: ['Programming', 'Networking'] },
  { id: '6', name: 'Nuwan', regNo: 'IT006', age: 22, city: 'Colombo', courses: ['Web Development'] },
  { id: '7', name: 'Kasun', regNo: 'IT007', age: 21, city: 'Kalutara', courses: ['Mobile Apps'] },
  { id: '8', name: 'Ruwan', regNo: 'IT008', age: 24, city: 'Mannar', courses: ['Databases', 'Security'] },
  { id: '9', name: 'Dinesh', regNo: 'IT009', age: 23, city: 'Anuradhapura', courses: ['Security'] },
  { id: '10', name: 'Chamara', regNo: 'IT010', age: 20, city: 'Matale', courses: ['Programming'] },
]

export async function fetchStudents() {
  if (!API_URL) return LOCAL_STUDENTS

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const res = await fetch(API_URL, { signal: controller.signal })
    if (!res.ok) throw new Error(`Server responded with ${res.status}`)
    const data = await res.json()
    return data.map((s) => ({ ...s, id: String(s.id), courses: s.courses ?? [] }))
  } finally {
    clearTimeout(timer)
  }
}

export async function fetchStudent(id) {
  const all = await fetchStudents()
  return all.find((s) => s.id === String(id)) ?? null
}
