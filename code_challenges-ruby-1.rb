# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def odds_sorted array
    odd_nums = array.select do |value|
        value.is_a?(Integer) && value.odd?
    end
    odd_nums.sort
end


p odds_sorted(fullArr1)
p odds_sorted(fullArr2)

# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def finder array, letter_to_find
    array.select do |word| 
        word.include? letter_to_find
    end
end


p finder(beverages_array, letter_o)
p finder(beverages_array, letter_a)


# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_delete string
    string.downcase.delete('aeiou')
end

p vowel_delete(album1)

p vowel_delete(album2)

p vowel_delete(album3)


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :model, :wheels, :current_speed, :speed

    def initialize (model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def speed_bike
        @speed += 1
    end

    def get_info
        puts "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
end

bike1 = Bike.new("Trek", 2,0)
p bike1.get_info


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

class Bike 
    attr_accessor :model, :wheels, :current_speed

    def initialize (model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def pedal_faster
        @current_speed += 1
    end

    def break
        if @current_speed > 0 do 
            @current_speed -= 1
        end
    end

    def get_info
        puts "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
end

bike1 = Bike.new("Trek", 2,0)
# p bike1.get_info
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
p bike1.get_info
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
bike1.break
p bike1.get_info
