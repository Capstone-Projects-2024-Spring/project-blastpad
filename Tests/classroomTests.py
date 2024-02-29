import unittest
from classroom import Classrooms


class Test_Classroom(unittest.TestCase):

    def test_get_room_number(self):
        classroom = Classrooms(room_number=123, teacher_id=1001)
        self.assertEqual(classroom.get_room_number(), 123)

    def test_set_room_number(self):
        classroom = Classrooms(room_number=101, teacher_id=1001)
        classroom.set_room_number(102)
        self.assertEqual(classroom.room_number, 102)


if __name__ == '__main__':
    unittest.main()
